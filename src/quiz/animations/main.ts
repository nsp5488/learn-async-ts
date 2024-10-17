async function handleAliceTransformations() {
  const aliceTumbling1: Keyframe[] = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
  ];

  const aliceTiming1: KeyframeEffectOptions = {
    duration: 2000,
    iterations: 1,
    fill: "forwards",
  };
  const alice10 = document.querySelector<HTMLElement>("#alice1");
  const alice20 = document.querySelector<HTMLElement>("#alice2");
  const alice30 = document.querySelector<HTMLElement>("#alice3");
  if (alice10 && alice20 && alice30) {
    // Promise chain
    try {
      await alice10.animate(aliceTumbling1, aliceTiming1).finished;
      await alice20.animate(aliceTumbling1, aliceTiming1).finished;
      await alice30.animate(aliceTumbling1, aliceTiming1).finished;
    } catch (err) {
      alert(`Error when promising ... ${err}`);
    }
  } else {
    console.warn("#alice not found");
  }
}
handleAliceTransformations();
