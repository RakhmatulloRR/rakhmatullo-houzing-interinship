// 4-videoning 46-minutida hooks papkasiga o'tamiz
// fayl structura
export let project = {
  src: "src folder",
  public: "public folder",
  indexCss: 'index.css',
  indexJs: "index.js"
}
//^ 2-dars:
export const src2 = {
  assets: {
    icons: ["logo.png", "facebook.svg", "..."],
    imgs: ["img1.png", "img2.jpg", "..."],
  },
  components: {
    Navbar: ["index.js", "style.js"],
    Generic: {
      Button: ["index.js", "style.js"],
      Input: ["index.js", "style.js"],
    }
  },
  pages: {
    HomePage: ["index.js", "style.js"],
    GenericPage: ["index.js", "style.js"],
  },
  utils: ["navbar.js"],
  root: ["index.js"],
};
//^ 1-dars:
export const src = {
  assets: {
    icons: ["logo.png", "facebook.svg", "..."],
    imgs: ["img1.png", "img2.jpg", "..."],
  },
  components: {
    Navbar: ["index.js", "style.js"],
  },
  pages: {
    HomePage: ["index.js", "style.js"],
    GenericPage: ["index.js", "style.js"],
  },
  utils: ["navbar.js"],
  root: ["index.js"],
};
