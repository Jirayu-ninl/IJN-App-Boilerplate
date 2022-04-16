export default function share() {
  return (
    <div className="IJN-social">
      <a href="#">
        <svg
          width="1.2em"
          height="1.2em"
          viewBox="0 0 16 16"
          className="bi bi-share"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M11.724 3.947l-7 3.5-.448-.894 7-3.5.448.894zm-.448 9l-7-3.5.448-.894 7 3.5-.448.894z"
          />
          <path
            fillRule="evenodd"
            d="M13.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-11-6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
          />
        </svg>
      </a>
      <style jsx>{`
        .IJN-social {
          position: fixed;
          right: 34px;
          bottom: 34px;
          height: 50px;
          width: 50px;
          line-height: 50px;
          z-index: 1000;
          transition-duration: 200ms;
          background-color: #7341ff;
          border-radius: 50%;
        }

        .IJN-social:hover {
          transform: scale(1.2);
          transition-duration: 200ms;
        }

        .IJN-social > a {
          height: 50px;
          width: 50px;
          line-height: 50px;
          text-align: center;
          display: block;
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 10;
        }
        .IJN-social svg {
          color: #fff;
          font-size: 17px !important;
          height: 100%;
          bottom: 0;
          margin: auto;
          padding-right: 0;
          display: block;
          z-index: 20;
          position: relative;
        }
      `}</style>
    </div>
  );
}
