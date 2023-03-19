import { addChild } from "https://jscroot.github.io/element/croot.js";
import {getRandomColor,getRandomColorName} from "https://jscroot.github.io/image/croot.js";
import {dhsTag,dhsClass,dhsContent} from "../template/table.js";

export function isiTableDhs(results){
    results.forEach(isiRow);
}

function isiRow(value){
    let content=dhsContent.replace("#NAMA MATA KULIAH#",value.nama_matkul).replace("#KODE MATA KULIAH",value.kode_matkul).replace("#STATUS#",value.status).replace("#SKS#",value.sks).replace("#KELAS#",value.kelas());
    addChild("dhs",dhsTag,dhsClass,content);
}