const packages = [
  {
    priorityLevel: "express",
    isFragile: false,
    weight: 2,
    to: "Sir Harrington IV",
    trackingNumber: "1324kjs",
  },
  {
    priorityLevel: "standard",
    isFragile: true,
    weight: 0.5,
    to: "Master Mercutio",
    trackingNumber: "1325sdk",
  },
  {
    priorityLevel: "free",
    isFragile: true,
    weight: 0.5,
    to: "Mistress Ravenfeather",
    trackingNumber: "jffd147",
  },
  {
    priorityLevel: "standard",
    isFragile: false,
    weight: 4,
    to: "B. Robert Brown",
    trackingNumber: "acdc145",
  },
  {
    priorityLevel: "express",
    isFragile: true,
    weight: 6,
    to: "Chancellor Wallace",
  },
  {
    priorityLevel: "standard",
    isFragile: false,
    weight: 5,
    to: "Sarah Sharm",
    trackingNumber: "8081baz",
  },
  {
    priorityLevel: "free",
    isFragile: true,
    weight: 12,
    to: "Tae Lien",
    trackingNumber: "suz2367",
  },
];

function drawPackages() {
  let template = "";
  packages.forEach(
    (p) =>
      (template += `
    <div class="col-12 my-1 mx-4">
          <div class="row">
            <div class="col-6 col-md-6 my-auto">
              <span class="myText">TO: ${p.to}</span>
            </div>
            <div class="col-6 col-md-6 my-auto">
              <span class="myText">ID: ${p.trackingNumber}</span>
            </div>          
          </div>
        </div>
    `)
  );
  // @ts-ignore
  document.getElementById("packages").innerHTML = template;
}

drawPackages();

function drawHeavy() {
  let template = "";
  let heavyPackage = packages.filter((p) => p.weight > 10);
  console.log("Heavy Packages:", heavyPackage);
  heavyPackage.forEach(
    (hp) =>
      (template += `
  <div class="col-12 my-1 mx-4">
          <div class="row">
            <div class="col-6 col-md-6 my-auto">
              <span class="myText">TO: ${hp.to}</span>
            </div>
            <div class="col-6 col-md-6 my-auto">
              <span class="myText">ID: ${hp.trackingNumber}</span>
            </div>          
          </div>
        </div>
  `)
  );
  // @ts-ignore
  document.getElementById("packages").innerHTML = template;
}
function drawPriority() {
  let template = "";
  let heavyPackage = packages.filter((p) => p.priorityLevel == "express");
  console.log("Heavy Packages:", heavyPackage);
  heavyPackage.forEach(
    (hp) => hp.trackingNumber == undefined,
    undefined == "n/a"
  );
  console.log(heavyPackage);
  heavyPackage.forEach(
    (hp) =>
      (template += `
  <div class="col-12 my-1 mx-4">
          <div class="row">
            <div class="col-md-6 my-auto">
              <span class="myText">TO: ${hp.to}</span>
            </div>
            <div class="col-md-6 my-auto">
              <span class="myText">ID: ${hp.trackingNumber}</span>
            </div>          
          </div>
        </div>
  `)
  );
  // @ts-ignore
  document.getElementById("packages").innerHTML = template;
}
function drawFragile() {
  let template = "";
  let heavyPackage = packages.filter((p) => p.isFragile == true);
  console.log("Heavy Packages:", heavyPackage);
  heavyPackage.forEach(
    (hp) =>
      (template += `
  <div class="col-12 my-1 mx-4">
          <div class="row">
            <div class="col-6 col-md-6 my-auto">
              <span class="myText">TO: ${hp.to}</span>
            </div>
            <div class="col-6 col-md-6 my-auto">
              <span class="myText">ID: ${hp.trackingNumber}</span>
            </div>          
          </div>
        </div>
  `)
  );
  // @ts-ignore
  document.getElementById("packages").innerHTML = template;
}
