import gsap from "gsap";

function catAnimate({ wakeAnimation }): Map<string, any> {
  const animations = new Map();
  // animations
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
    animations.set("pull", pull);
    return pull;
  };

  // CAT
  gsap.set("#eye__left__open, #eye__right__open", {
    opacity: 0,
    scale: 1.2,
    transformOrigin: "center",
  });

  const leftHand = gsap.to("#left-hand", {
    rotate: -15,
    transformOrigin: "top",
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "power1.inOut",
  });

  animations.set("leftHand", leftHand);

  const openEyes = () => {
    const eyesOpening = gsap
      .timeline({})
      .to("#eye__left__open, #eye__right__open", {
        opacity: 1,
        duration: 0.01,
      });
    animations.set("eyesOpening", eyesOpening);
    return eyesOpening;
  };

  const blinkEyes = () => {
    const blinking = gsap
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
    animations.set("blinking", blinking);
    return blinking;
  };

  // TAIL
  const tail = gsap.timeline({ repeat: -1, yoyo: true });
  animations.set("tail", tail);
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
  wakeAnimation.current = gsap.timeline({ paused: true });
  wakeAnimation.current
    .add(pullAnim())
    .add(openEyes(), "reverse")
    .add(blinkEyes());

  return animations;
}

function catClick({ wakeAnimation, catRef }): void {
  gsap.timeline({ repeat: 1, yoyo: true }).to("#tail", {
    ease: "power1.inOut",
    attr: { d: "M 447.606 379.471 v 24.772 s -0.061 26.915 39.394 -53.243" },
    duration: 0.5,
    delay: 0,
  });
  if (catRef.current?.classList.contains("close")) {
    catRef.current.classList.remove("close");
    wakeAnimation.current.reverse("reverse");
  } else {
    catRef.current?.classList.add("close");
    wakeAnimation.current.play();
  }
}

export { catAnimate, catClick };
