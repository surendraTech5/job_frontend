import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: calc(2rem + 2vh) calc(2rem + 2vw);
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

    .hero-content {
        width: 100%;
        display: grid;
        grid-template-columns: minmax(auto, 700px) minmax(auto, 500px);
        justify-content: space-between;
        align-items: center;
        gap: 4rem;
    }

    h1 {
        font-size: calc(2rem + 2vw);
        font-weight: 800;
        letter-spacing: -0.02em;
        line-height: 1.1;
        margin-bottom: 1.5rem;
    }

    p {
        font-size: calc(1rem + 0.3vw);
        font-weight: 400;
        line-height: 1.6;
        margin-bottom: 2rem;
        color: rgba(255, 255, 255, 0.9);
    }

    .btn-grp {
        display: flex;
        flex-wrap: wrap;
        justify-content: start;
        align-items: center;
        gap: 1.5rem;
    }

    .btn {
        text-decoration: none;
        text-transform: capitalize;
        font-weight: 600;
        font-size: calc(1.1rem + 0.2vw);
        color: var(--color-white);
        background-color: var(--color-primary);
        border: 2px solid var(--color-primary);
        padding: calc(12px + 0.3vw) calc(24px + 0.5vw);
        border-radius: 12px;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        position: relative;
        overflow: hidden;
    }

    .btn::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
    }

    .btn:hover::before {
        left: 100%;
    }

    .btn:hover {
        background-color: var(--color-secondary);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        transform: translateY(-2px);
    }

    .placeholder {
        display: flex;
        justify-content: end;
        position: relative;
    }

    .placeholder img {
        width: 100%;
        max-width: 500px;
        height: auto;
        object-fit: cover;
        border-radius: 20px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        transition: transform 0.3s ease;
    }

    .placeholder img:hover {
        transform: scale(1.05);
    }

    @media screen and (max-width: 1024px) {
        .hero-content {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
        }

        .btn-grp {
            justify-content: center;
        }

        .placeholder {
            justify-content: center;
        }
    }

    @media screen and (max-width: 768px) {
        padding: calc(1.5rem + 1.5vh) calc(1rem + 1.5vw);

        .hero-content {
            gap: 2rem;
        }

        h1 {
            font-size: calc(1.8rem + 2vw);
        }

        p {
            font-size: calc(0.9rem + 0.3vw);
            margin-bottom: 1.5rem;
        }

        .btn-grp {
            flex-direction: column;
            align-items: center;
        }

        .btn {
            width: 100%;
            max-width: 300px;
        }

        .placeholder img {
            max-width: 100%;
        }
    }
`;

export default Wrapper;
