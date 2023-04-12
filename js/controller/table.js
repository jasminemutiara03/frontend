
import { addInner } from "https://jscroot.github.io/element/croot.js";
import { get } from "https://jscroot.github.io/api/croot.js"; 
import { getRandomColorName } from "./randomcol.js";
import { rowtabel, svg, em } from "../template/table.js";
import { URLDhs } from "../config/url.js";
get(URLDhs, tabelContent);
 

function tabelContent(result){
    rencanastudiTable(result);
}

function userTable(jsonParse){
    let row = '';
    jsonParse.forEach((element) => {
    let emailcol = em.replace("#col#", getRandomColorName());
    console.log(emailcol);
    row = rowtabel.replace("#rencana_studi#", element.Rencanastudi.nama).
        replace("#nama_matkul#", element.rencanastudi.nama_matkul).
        replace("#kode_matkul#", element.renacanastudi.kode_matkul).
        replace("#status#", element.rencanastudi.status).
        replace("#sks#", element.rencanastudi.sks).
        replace("#kelas#", element.rencanastudi.kelas).
        replace("#SVG#", svgicon);
    addInner("demo",row);
    });
}