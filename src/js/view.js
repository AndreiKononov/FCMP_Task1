class Renderer {

  setView(element, content) {
    return element ? (element.appendChild(content)) : null;
  }

  loaderIsHidden(element) {
    return element.classList.add('hidden');
  }
}

export const VIEW = (() => ({
  Renderer
}))();