import { useState } from "react";
import { supabase } from "../supabaseClient";
import Footer from "../Component/Footer";
import NavBar from "../Component/NavBar";

// Adjust these to match your project.
const TABLE_NAME = "certificates";
const STORAGE_BUCKET = "certificate";
const FILE_EXTENSION = "png";

type CertificateRow = {
  id: string;
  created_at: string;
  certificate_id: string;
  student_name: string;
  course: string;
  issue_date: string;
};

type Status = "idle" | "loading" | "found" | "not_found" | "error";

const styles = {
  page: {
    background: "#7C33FF",
    fontFamily: "'Inter', sans-serif",
    color: "#12130F",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    padding: "48px 24px",
  },
  wrap: {
    width: "100%",
    maxWidth: 960,
    marginTop: "70px",
  },
  tabs: {
    display: "flex",
    gap: 2,
  },
  tab: (active: boolean) => ({
    padding: "14px 28px",
    fontSize: 14,
    fontWeight: 500,
    letterSpacing: "0.01em",
    background: active ? "#bba6e1" : "#511bb6",
    color: active ? "white" : "black",
    borderRadius: "10px 10px 0 0",
    cursor: "pointer",
    border: "none",
  }),
  panel: {
    background: "white",
    borderRadius: "0 14px 14px 14px",
    padding: 56,
    position: "relative" as const,
    overflow: "hidden",
    boxShadow: "0 1px 2px rgba(18,19,15,0.04)",
  },
  stamp: {
    position: "absolute" as const,
    top: 44,
    right: 56,
    width: 96,
    height: 96,
    borderRadius: "50%",
    border: "1.5px dashed #42583F",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center" as const,
    color: "#42583F",
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 10.5,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    lineHeight: 1.4,
    transform: "rotate(8deg)",
    opacity: 0.9,
  },
  eyebrow: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 12,
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
    color: "#7C33FF",
    margin: "0 0 18px",
    display: "flex",
    alignItems: "center",
    gap: 9,
  },
  eyebrowDot: {
    display: "inline-block",
    width: 7,
    height: 7,
    background: "#7C33FF",
    borderRadius: "50%",
  },
  h1: {
    fontFamily: "'Fraunces', serif",
    fontWeight: 500,
    fontSize: 44,
    lineHeight: 1.08,
    margin: "0 0 20px",
    maxWidth: 460,
  },
  lede: {
    fontSize: 15.5,
    lineHeight: 1.65,
    color: "#6B6858",
    maxWidth: 440,
    margin: "0 0 40px",
  },
  fieldLabel: {
    display: "block",
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11.5,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "#12130F",
    marginBottom: 10,
  },
  ticket: {
    display: "flex",
    alignItems: "stretch",
    maxWidth: 440,
  },
  ticketInput: {
    flex: 1,
    background: "white",
    border: "1.5px solid #12130F",
    borderRight: "1.5px dashed #6B6858",
    borderRadius: "10px 0 0 10px",
    padding: "0 18px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    width: "100%",
    border: "none",
    background: "transparent",
    outline: "none",
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 16,
    letterSpacing: "0.12em",
    color: "#12130F",
    padding: "16px 0",
  },
  button: (hover: boolean, disabled: boolean) => ({
    border: `1.5px solid ${hover && !disabled ? "#7C33FF" : "#12130F"}`,
    background: disabled ? "#B7B29C" : hover ? "#7C33FF" : "#12130F",
    color: "#F5F2E9",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    fontSize: 14.5,
    padding: "0 28px",
    borderRadius: "0 10px 10px 0",
    cursor: disabled ? "default" : "pointer",
    display: "flex",
    alignItems: "center",
    gap: 8,
    transition: "background 0.15s ease, border-color 0.15s ease",
  }),
  hint: {
    marginTop: 14,
    fontSize: 13,
    color: "#6B6858",
  },
  hintStrong: {
    color: "#12130F",
    fontWeight: 500,
  },
  errorText: {
    marginTop: 14,
    fontSize: 13.5,
    color: "#7C33FF",
  },
  resultCard: {
    marginTop: 40,
    paddingTop: 32,
    borderTop: "1px solid white",
    maxWidth: 500,
  },
  resultBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11.5,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    color: "#7C33FF",
    background: "#E4EADF",
    padding: "6px 12px",
    borderRadius: 20,
    marginBottom: 20,
  },
  resultRow: {
    display: "flex",
    justifyContent: "space-between",
    padding: "12px 0",
    borderBottom: "1px solid #EFEBDF",
    fontSize: 14.5,
  },
  resultLabel: {
    color: "#6B6858",
  },
  resultValue: {
    color: "#12130F",
    fontWeight: 500,
    textAlign: "right" as const,
  },
  downloadButton: (hover: boolean) => ({
    marginTop: 24,
    width: "100%",
    border: `1.5px solid ${hover ? "#7C33FF" : "#9c83cc"}`,
    background: hover ? "#7C33FF" : "#9c83cc",
    color: "#F5F2E9",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    fontSize: 14.5,
    padding: "14px 0",
    borderRadius: 10,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    transition: "background 0.15s ease, border-color 0.15s ease",
    textDecoration: "none",
  }),
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return dateStr;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Returns the public URL for the certificate file.
// Bucket is public, so this is a plain URL construction — no network call needed.
function getCertificateFileUrl(certificateId: string): string {
  const filePath = `${certificateId}.${FILE_EXTENSION}`;
  const { data } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(filePath);
  return data.publicUrl;
}

export default function VerifyCertifications() {
  const [activeTab, setActiveTab] = useState<"Certification" | "outcome">(
    "Certification",
  );
  const [code, setCode] = useState("");
  const [hover, setHover] = useState(false);
  const [downloadHover, setDownloadHover] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [record, setRecord] = useState<CertificateRow | null>(null);
  const [fileUrl, setFileUrl] = useState<string | null>(null);

  const handleVerify = async () => {
    const trimmed = code.trim();
    if (!trimmed) return;

    setStatus("loading");
    setRecord(null);
    setFileUrl(null);

    const { data, error } = await supabase
      .from(TABLE_NAME)
      .select(
        "id, created_at, certificate_id, student_name, course, issue_date",
      )
      .eq("certificate_id", trimmed)
      .maybeSingle();

    if (error) {
      console.error(error);
      setStatus("error");
      return;
    }

    if (!data) {
      setStatus("not_found");
      return;
    }

    setRecord(data as CertificateRow);
    setStatus("found");
    setFileUrl(getCertificateFileUrl(data.certificate_id));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleVerify();
  };

  return (
    <>
      <NavBar />
      <div style={styles.page}>
        <div style={styles.wrap}>
          <div style={styles.tabs}>
            <button
              style={styles.tab(activeTab === "Certification")}
              onClick={() => setActiveTab("Certification")}
            >
              Certifications
            </button>
          </div>

          <div style={styles.panel}>
            <div style={styles.stamp}>
              Outcome
              <br />
              verified
              <br />
              &#10003;
            </div>

            <p style={styles.eyebrow}>
              <span style={styles.eyebrowDot} />
              Outcome School · certifications check
            </p>

            <h1 style={styles.h1}>Verify a Certification</h1>
            <p style={styles.lede}>
              Enter the ID printed on someone's certificate to confirm what they
              completed, when they finished, and download a copy.
            </p>

            <label style={styles.fieldLabel} htmlFor="code">
              Certification ID
            </label>
            <div style={styles.ticket}>
              <div style={styles.ticketInput}>
                <input
                  id="code"
                  type="text"
                  placeholder="OS-YYYY-#####-XX"
                  autoComplete="off"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  onKeyDown={handleKeyDown}
                  style={styles.input}
                />
              </div>
              <button
                type="button"
                style={styles.button(hover, status === "loading")}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={handleVerify}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Checking…" : "Verify"}
                {status !== "loading" && (
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width={15}
                    height={15}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                )}
              </button>
            </div>

            {status === "idle" && (
              <p style={styles.hint}>
                Find this on the bottom of the certificate, formatted like{" "}
                <span style={styles.hintStrong}>OS-YYYY-#####-XX</span>.
              </p>
            )}

            {status === "not_found" && (
              <p style={styles.errorText}>
                No Certification matches that ID. Double-check the code and try
                again.
              </p>
            )}

            {status === "error" && (
              <p style={styles.errorText}>
                Something went wrong while checking that Certification. Try
                again in a moment.
              </p>
            )}

            {status === "found" && record && (
              <div style={styles.resultCard}>
                <div style={styles.resultBadge}>
                  <span>&#10003;</span> Verified Certification
                </div>

                <div style={styles.resultRow}>
                  <span style={styles.resultLabel}>Student</span>
                  <span style={styles.resultValue}>{record.student_name}</span>
                </div>
                <div style={styles.resultRow}>
                  <span style={styles.resultLabel}>Course</span>
                  <span style={styles.resultValue}>{record.course}</span>
                </div>
                <div style={styles.resultRow}>
                  <span style={styles.resultLabel}>Issued</span>
                  <span style={styles.resultValue}>
                    {formatDate(record.issue_date)}
                  </span>
                </div>
                <div style={styles.resultRow}>
                  <span style={styles.resultLabel}>Certification ID</span>
                  <span style={styles.resultValue}>
                    {record.certificate_id}
                  </span>
                </div>

                {fileUrl ? (
                  <a
                    href={fileUrl}
                    download={`${record.certificate_id}.${FILE_EXTENSION}`}
                    style={styles.downloadButton(downloadHover)}
                    onMouseEnter={() => setDownloadHover(true)}
                    onMouseLeave={() => setDownloadHover(false)}
                  >
                    Download certificate
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      width={15}
                      height={15}
                    >
                      <path d="M12 3v12" />
                      <path d="M7 10l5 5 5-5" />
                      <path d="M5 21h14" />
                    </svg>
                  </a>
                ) : (
                  <p style={styles.errorText}>
                    Certificate file couldn't be loaded. Check that{" "}
                    {STORAGE_BUCKET}/{record.certificate_id}.{FILE_EXTENSION}{" "}
                    exists in Storage.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
