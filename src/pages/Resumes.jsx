import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useUserContext } from "../context/UserContext";
import axios from "axios";
import { FaUserCircle, FaDownload } from "react-icons/fa";

const Resumes = () => {
  const { user, token } = useUserContext();
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchResumes = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/resume/all`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (user?.role === "user") {
        setResumes([data.data]);
      } else {
        setResumes(data.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) fetchResumes();
  }, [user]);

  // ✅ PROFESSIONAL DOWNLOAD FUNCTION (NO AXIOS, NO BLOB)
  const handleDownload = (fileUrl) => {
    const downloadUrl = `${import.meta.env.VITE_API_BASE_URL}/api/v1/application/secure-download-resume?url=${encodeURIComponent(
      fileUrl
    )}`;

    window.open(downloadUrl, "_blank");
  };

  if (loading) return <Loading>Loading resumes...</Loading>;

  return (
    <Wrapper>
      <div className="header">
        <h2>
          {user?.role === "user"
            ? "My Resume"
            : "All User Resumes"}
        </h2>
        <span>{resumes?.length || 0} Resume(s)</span>
      </div>

      {resumes?.length === 0 ? (
        <Empty>No resumes found</Empty>
      ) : (
        <div className="resume-grid">
          {resumes.map((item) => (
            <div key={item?._id} className="resume-card">
              <div className="card-top">
                <FaUserCircle className="avatar" />
                <div>
                  <h4>{item?.username || item?.name}</h4>
                  <p>{item?.email}</p>
                </div>
              </div>

              <div className="card-bottom">
                {item?.resume ? (
                  <button
                    onClick={() => handleDownload(item.resume)}
                    className="view-btn"
                  >
                    <FaDownload />
                    Download Resume
                  </button>
                ) : (
                  <span className="no-resume">
                    No Resume Uploaded
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default Resumes;

/* ===== Professional Styling ===== */

const Wrapper = styled.section`
  padding: 2rem 0;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .header h2 {
    font-size: 1.6rem;
    font-weight: 600;
  }

  .header span {
    background: var(--color-primary);
    color: white;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 0.85rem;
  }

  .resume-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.8rem;
  }

  .resume-card {
    background: white;
    border-radius: 16px;
    padding: 1.6rem;
    border: 1px solid #f1f1f1;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease;
  }

  .resume-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 35px rgba(0, 0, 0, 0.08);
  }

  .card-top {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1.4rem;
  }

  .avatar {
    font-size: 2.8rem;
    color: var(--color-primary);
  }

  .card-top h4 {
    margin: 0;
    font-size: 1.05rem;
    font-weight: 600;
  }

  .card-top p {
    margin: 0;
    font-size: 0.85rem;
    color: #777;
  }

  .view-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--color-primary);
    color: white;
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 0.85rem;
    border: none;
    cursor: pointer;
    transition: 0.2s ease;
  }

  .view-btn:hover {
    opacity: 0.85;
  }

  .no-resume {
    color: red;
    font-size: 0.9rem;
  }
`;

const Loading = styled.div`
  text-align: center;
  padding: 3rem;
`;

const Empty = styled.div`
  text-align: center;
  padding: 3rem;
  color: #777;
`;