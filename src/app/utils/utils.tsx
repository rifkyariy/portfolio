export const getViewportElement = (currentSection: any): string => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => {
      // console.log(`I'm ${isIntersecting ? 'in view' : 'out of view'}: ${target.getAttribute("id")}`, target);
      if (isIntersecting) {
        // console.log('target.getAttribute("id")', target.getAttribute("id"));
        currentSection = target.getAttribute("id");
      }
    });
  });

  // Observe all elements with IDs
  const elemsWithIds = document.querySelectorAll("section");
  elemsWithIds.forEach(elem => observer.observe(elem));

  // console.log('currentSection', currentSection);
  return currentSection;
}


export const scrolltoHash = function (element_id: string) {
  const element = document.getElementById(element_id)?.parentElement;
  element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}