const fs = require('fs');
const p = 'd:\\Idos\\Coding\\Vite\\company-profile-tosa\\src\\data\\content.ts';
let s = fs.readFileSync(p, 'utf8');

const marker = 'export const CIVIL_SERVICES = [';
const startIdx = s.indexOf(marker);
if (startIdx === -1) { throw new Error('marker not found'); }
const arrayStartRaw = s.indexOf('[', startIdx);
const arrayEndRaw = s.indexOf('];', arrayStartRaw);
const head = s.slice(0, arrayStartRaw + 1); // includes "export const CIVIL_SERVICES = ["
const tail = s.slice(arrayEndRaw); // "];"
let body = s.slice(arrayStartRaw + 1,endRaw —that is between "[" and "];"). Let me recompute.