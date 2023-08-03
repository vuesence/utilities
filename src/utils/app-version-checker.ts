export async function checkVersion(localStorageName: string) {
  console.log("checking version");

  const buildData = await fetch("/build.json?version").then((response) => {
    return response.json();
  });
  console.log("checking 2");
  if (buildData.date !== localStorage.getItem(localStorageName)) {
    // document.location.reload();
    console.log("updating version");
    console.log("new version:", buildData.date);
    localStorage.setItem(localStorageName, buildData.date);
    window.location.reload();
    // window.location.href = "/?";
    // window.location.href = `${window.location.href}?update`;
    console.log("reloaded");
  } else {
    console.log("no updates");
  }
}
