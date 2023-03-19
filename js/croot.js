import { get } from "https://jscroot.github.io/api/croot.js";
import {setInner } from "https://jscroot.github.io/element/croot.js";
import {isiTablePresensi} from "./controller/table.js";
import {URLPresensi} from "./config/url.js";

get(URLPresensi,isiTablePresensi);

setInner("namadivisi","Dari croot.js");
