
var projects = [
  {
    title: "TESTD Backend",
    date: "07/2020 – Today",
    techs: "Node.js, Express.js, TypeScript, MongoDB, PM2, Nginx, SFTP, Twilio, Swagger, Moment.js Sparkpost, JWT",
  },
  {
    title: "TESTD Blockchain",
    date: "07/2020 – 09/2020",
    techs: "Hyperledger Fabric, Hyperledger Explorer, Go lang, Shell scripts, Docker, Docker-compose",
  },
  {
    title: "TESTD Frontend",
    date: "07/2020 – Today",
    techs: "React, Redux, Material-UI, Axios",
  },
  {
    title: "TESTD ARG (Application Routing Gateway)",
    date: "10/2020",
    techs: "Node.js, Express.js, TypeScript, PostgreSQL, Docker, Dockerfile, Docker-compose",
  },
  {
    title: "TESTD ID",
    date: "06/2020 – 08/2020",
    techs: "Ionic, Apache Cordova, Angular, Android, IOS",
  },
  {
    title: "Fiat to Cryptocurrency",
    date: "10/2020",
    techs: "Node.js, Pug.js, Axios, JWT, WhiteBit API's",
  },
  {
    title: "Parking Application | The Capital Investment Advisor",
    date: "08/2020",
    techs: "React, Bootstrap, Internationalization (i18next)",
  },
  {
    title: "Cardano IELE Account Creation",
    date: "04/2020",
    techs: "Cardano, Solidity, Node.js, iohk/mallet, Remix IDE",
  },
  {
    title: "BTC, ETH Payment Gateway",
    date: "04/2020",
    techs: "Node.js, Pug.js, Websocket, bitcore-lib, web3.js",
  },
  {
    title: "Ethereum Referral Earning DApp",
    date: "04/2020",
    techs: "Solidity, web3.js, HTML, JavaScript, Remix IDE, MetaMask",
  },
  {
    title: "Unum ID Blockchain Application (POC)",
    date: "03/2020",
    techs: "Hyperledger Fabric, Go lang, IBM Blockchain Platform 2 (IBP setup, kubadm setup, deploy yaml files), Dockerfile, Docker Hub, Kubernetes, Node.js, .cds chaincode, connection-profile.json",
  },
  {
    title: "ModelCraft Ticketing Application Server",
    date: "03/2020",
    techs: "Node.js, TypeScript, Elasticsearch, Docker",
  },
  {
    title: "ModelCraft Ticketing Application Client",
    date: "03/2020",
    techs: "Ionic, Cordova, Angular, PWA",
  },
  {
    title: "Land Registration Blockchain Application (POC)",
    date: "03/2020",
    techs: "Hyperledger Fabric, Hyperledger Explorer, Go lang, MongoDB, Shell scripts, Docker, Docker-compose, Angular, Apollo GraphQL, GraphQL (Query, Mutation) (resolver)",
  },
  {
    title: "Anitra Mobie Application",
    date: "03/2020 - 04/2020",
    techs: "Ionic, Cordova, Angular, I18N (ngx-translate), ",
  },
  {
    title: "Anitra Livestock Blockchain",
    date: "02/2020 - 04/2020",
    techs: "Hyperledger Fabric, Hyperledger Explorer, Go lang, Shell scripts, Docker, Dockerfile, Docker-compose, Kubernetes (minikube, kubeadm, kubectl), Kubernetes deploy yml files, Node.js, Apache CouchDB",
  },
  {
    title: "",
    date: "",
    techs: "",
  },
  {
    title: "",
    date: "",
    techs: "",
  },
  {
    title: "",
    date: "",
    techs: "",
  },
  {
    title: "",
    date: "",
    techs: "",
  },
  {
    title: "",
    date: "",
    techs: "",
  },
  {
    title: "",
    date: "",
    techs: "",
  },
];

console.log('Project length:', projects.length);

var projectStr = "";
projects.forEach(function (project, index) {
  projectStr += `
    <div class="card">
      <div class="skill-meta">
        <h3>${project.title}</h3>
        <span class="date">${project.date}</span>
        <br />
        <span>${project.techs}</span>
      </div>
    </div>`;
  if ((index + 1) === projects.length) {
    document.getElementById("projects").innerHTML = projectStr;
  }
});
