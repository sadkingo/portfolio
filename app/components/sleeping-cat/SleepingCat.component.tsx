"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const SleepingCat = () => {
  const animationsToPause = new Map();
  const windowRef = useRef<HTMLDivElement>(null);
  const closeMaster = useRef(gsap.timeline({ paused: true }));
  const changeColors = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    gsap.defaults({ ease: "linear" });

    // PULL
    const pullAnim = () => {
      const pull = gsap.timeline({});
      pull.to("#right-hand", {
        rotate: 20,
        transformOrigin: "right bottom",
        repeat: 1,
        yoyo: true,
        duration: 0.8,
        ease: "power1.inOut",
      });
      return pull;
    };

    // CAT
    gsap.set("#eye__left__open, #eye__right__open", {
      opacity: 0,
      scale: 1.2,
      transformOrigin: "center",
    });

    gsap.to("#left-hand", {
      rotate: -15,
      transformOrigin: "top",
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "power1.inOut",
    });

    const openEyes = () => {
      return gsap.timeline({}).to("#eye__left__open, #eye__right__open", {
        opacity: 1,
        duration: 0.01,
      });
    };

    const blinkEyes = () => {
      return gsap
        .timeline({ repeat: -1, repeatDelay: 3 })
        .to("#eye__left__open, #eye__right__open", {
          duration: 0.1,
          opacity: 1,
        })
        .to("#eye__left__open, #eye__right__open", {
          duration: 0.03,
          opacity: 0,
        })
        .to("#eye__left__open, #eye__right__open", {
          duration: 0.03,
          opacity: 0,
        })
        .to("#eye__left__open, #eye__right__open", {
          duration: 0.1,
          opacity: 1,
        });
    };

    // TAIL
    const tail = gsap.timeline({ repeat: -1, yoyo: true });
    animationsToPause.set("tail", tail);
    tail
      .to("#tail", {
        ease: "power1.inOut",
        attr: { d: "M447.606 379.471v24.772s-.061 26.915-28.211 26.915" },
        duration: 1,
        delay: 0.5,
      })
      .to("#tail", {
        ease: "power1.inOut",
        duration: 1,
        attr: { d: "M447.606 379.471v10.772s.061 26.915 28.211 26.915" },
      });

    // Master Timeline
    closeMaster.current = gsap.timeline({ paused: true });
    closeMaster.current
      .add(pullAnim())
      .add(openEyes(), "reverse")
      .add(blinkEyes());

    // Change Colors
    changeColors.current = gsap.timeline({
      paused: true,
      defaults: { duration: 1, ease: "sine.Out" },
    });

    // TODO: change the theam from theme component!!
    changeColors.current.to("body", { backgroundColor: "#303853" }, "color");
  }, []);

  const handleWindowClick = () => {
    const tailAnimation = animationsToPause.get("tail");
    tailAnimation.pause();
    setTimeout(() => tailAnimation.play(), 1000);
    gsap.timeline({ repeat: 1, yoyo: true }).to("#tail", {  
      ease: "power1.inOut",
      attr: { d: "M 447.606 379.471 v 24.772 s -0.061 26.915 39.394 -53.243" },
      duration: 0.5,
      delay: 0,
    });
    if (windowRef.current?.classList.contains("close")) {
      windowRef.current.classList.remove("close");
      closeMaster.current.reverse("reverse");
      changeColors.current.reverse();
    } else {
      windowRef.current?.classList.add("close");
      closeMaster.current.play();
      changeColors.current.play();
    }
  };

  return (
    <div className="flex relative justify-center items-center">
      <div
        ref={windowRef}
        onClick={handleWindowClick}
        className="h-18 w-max absolute -top-4 right-0 "
      >
        {renerCatImg()}
      </div>
    </div>
  );
};

function renerCatImg() {
  return (
    <svg
      className="w-40 z-10"
      viewBox="0 0 230 130"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
      version="1.1"
    >
      <g transform="translate(-285, -330)">
        <g>
          <path
            id="right-hand"
            d="M331.488 386.954s-27.273-1.471-26.23 7.167c.766 6.338 8.295 7.357 14.469 7.772 6.174.416 36.055.929 11.761-14.939z"
            fill="#98aebe"
          ></path>
          <path
            id="body"
            d="M352.39 365.252s81.405-40.993 98.905-.68c11.659 26.856-7.929 42.029-43.527 42.029-23.361 0-43.863-1.589-52.67-5.837-8.806-4.248-2.708-35.512-2.708-35.512z"
            fill="#98aebe"
          ></path>
          <clipPath id="_clip2">
            <path d="M352.39 365.252s81.405-40.993 98.905-.68c11.659 26.856-7.929 42.029-43.527 42.029-23.361 0-43.863-1.589-52.67-5.837-8.806-4.248-2.708-35.512-2.708-35.512z"></path>
          </clipPath>
          <g clipPath="url(#_clip2)" fill="#556f80">
            <ellipse cx="387.298" cy="348.073" rx="6.745" ry="21.523"></ellipse>
            <ellipse cx="405.01" cy="345.617" rx="6.745" ry="21.523"></ellipse>
            <ellipse cx="421.309" cy="342.364" rx="6.745" ry="21.523"></ellipse>
          </g>
          <g id="face">
            <path
              d="M364.317 400.424s11.226-4.284 15.647-9.691c6.564-8.027 3.892-15.747 3.892-15.747l-11.031.387-8.508 25.051z"
              fill="#303853"
              fillOpacity=".2"
            ></path>
            <path
              id="head"
              d="M351 346.994c18.134 0 32.856 12.256 32.856 27.351 0 15.096-5.681 27.352-32.856 27.352s-32.856-12.256-32.856-27.352c0-15.095 14.722-27.351 32.856-27.351z"
              fill="#98aebe"
            ></path>
            <clipPath id="_clip3">
              <path
                id="head1"
                d="M351 346.994c18.134 0 32.856 12.256 32.856 27.351 0 15.096-5.681 27.352-32.856 27.352s-32.856-12.256-32.856-27.352c0-15.095 14.722-27.351 32.856-27.351z"
              ></path>
            </clipPath>
            <g clipPath="url(#_clip3)">
              <ellipse
                id="head__mark"
                cx="352.146"
                cy="341.559"
                rx="6.738"
                ry="21.523"
                fill="#556f80"
              ></ellipse>
            </g>
            <g id="ear__left">
              <path
                d="M329.297 344.831c1.229-1.448 3.397-1.633 4.854-.414 5.049 4.184 8.243 8.982 9.656 14.354.415 1.603-.359 3.277-1.849 4-5.62 2.725-11.188 3.166-16.711 1.657-1.627-.446-2.699-1.995-2.544-3.675.628-6.08 2.837-11.38 6.594-15.922z"
                fill="#98aebe"
              ></path>
              <path
                d="M329.582 351.25a3.3964 3.3964 0 012.573-1.627c1.066-.106 2.12.298 2.843 1.088 1.11 1.065 1.923 2.266 2.509 3.539a3.4906 3.4906 0 01-2.203 4.826c-1.44.422-2.872.558-4.298.426a3.4897 3.4897 0 01-2.508-1.416 3.4889 3.4889 0 01-.591-2.819c.411-1.425.944-2.769 1.675-4.017z"
                fill="#d7edee"
              ></path>
            </g>
            <g id="ear__right">
              <path
                d="M371.927 344.794c1.657-.929 3.754-.346 4.693 1.305 3.274 5.682 4.595 11.292 4.046 16.819-.17 1.648-1.479 2.947-3.127 3.105-6.218.595-11.591-.934-16.241-4.274-1.369-.985-1.834-2.811-1.103-4.331 2.709-5.48 6.627-9.677 11.732-12.624z"
                fill="#98aebe"
              ></path>
              <path
                d="M370.019 350.745a3.3997 3.3997 0 012.96-.605 3.3971 3.3971 0 012.273 1.991c.726 1.497 1.094 3.016 1.194 4.522a3.4903 3.4903 0 01-3.717 3.729c-1.618-.099-3.114-.5-4.498-1.183a3.491 3.491 0 01-1.832-2.189c-.271-.957-.12-1.985.415-2.824.936-1.303 1.984-2.463 3.205-3.441z"
                fill="#d7edee"
              ></path>
            </g>
            <g id="face__details">
              <path
                d="M336.292 387.714s-4.319-1.775-9.465-.34"
                fill="none"
                stroke="#556f80"
                strokeWidth="2"
              ></path>
              <path
                d="M362.652 387.714s4.319-1.775 9.465-.34"
                fill="none"
                stroke="#556f80"
                strokeWidth="2"
              ></path>
              <path
                d="M336.575 390.032s-3.765-.486-8.735 2.944"
                fill="none"
                stroke="#556f80"
                strokeWidth="2"
              ></path>
              <path
                d="M362.369 390.032s3.765-.486 8.735 2.944"
                fill="none"
                stroke="#556f80"
                strokeWidth="2"
              ></path>
              <path
                d="M349.873 386.424c.392-.242.89-.232 1.273.025.165.106.317.227.457.355.443.399.599 1.027.393 1.586-.206.56-.732.937-1.327.953a6.271 6.271 0 01-.434-.01 1.4684 1.4684 0 01-.872-2.576c.164-.108.329-.224.51-.333z"
                fill="#556f80"
              ></path>
              <path
                id="eye__left__close"
                d="M332.463 377.656c.993 1.432 3.476 2.14 5.122 2.13 1.987-.011 4.014-.609 5.028-2.13"
                fill="none"
                stroke="#556f80"
                strokeWidth="2"
              ></path>
              <path
                id="eye__right__close"
                d="M357.174 377.656c.992 1.432 3.475 2.14 5.121 2.13 1.987-.011 4.015-.609 5.028-2.13"
                fill="none"
                stroke="#556f80"
                strokeWidth="2"
              ></path>
              <g id="eye__right__open">
                <ellipse
                  cx="362.196"
                  cy="377.815"
                  rx="4.942"
                  ry="6.515"
                  fill="#d7edee"
                ></ellipse>
                <ellipse
                  id="eye__right__open__p"
                  cx="362.196"
                  cy="377.815"
                  rx="3.56"
                  ry="4.82"
                  fill="#556f80"
                ></ellipse>
              </g>
              <g id="eye__left__open">
                <ellipse
                  cx="337.566"
                  cy="377.815"
                  rx="4.942"
                  ry="6.515"
                  fill="#d7edee"
                ></ellipse>
                <ellipse
                  id="eye__left__open__p"
                  cx="337.566"
                  cy="377.815"
                  rx="3.56"
                  ry="4.82"
                  fill="#556f80"
                ></ellipse>
              </g>
            </g>
          </g>
          <path
            id="leg"
            d="M434.587 386.268s41.571-.431 39.44 10.421c-1.563 7.963-13.079 8.856-22.495 9.058-9.416.202-54.893-.712-16.945-19.479z"
            fill="#98aebe"
          ></path>
          <g id="tails" fill="none" stroke="#98aebe" strokeWidth="14">
            <path
              id="tail"
              d="M447.606 379.471v24.772s-.061 26.915-28.211 26.915"
            ></path>
          </g>
          <path
            id="left-hand"
            d="M367.154 392.352s-15.939 22.18-8.101 25.956c5.751 2.772 10.668-3.021 14.346-7.998 3.677-4.976 20.216-29.868-6.245-17.958z"
            fill="#98aebe"
          ></path>
        </g>
        <g id="switch__whole"></g>
      </g>
    </svg>
  );
}
export default SleepingCat;
