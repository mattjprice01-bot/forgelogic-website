import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const html=readFileSync(new URL('./automotive-register.html',import.meta.url),'utf8');
const app=readFileSync(new URL('../diagnostics-simple-work/artifacts/forgelogic-diagnostic-copilot/src/App.tsx',import.meta.url),'utf8');
test('website automotive registration is separate and posts directly to assistant',()=>{
 assert.match(html,/<form[^>]+action="https:\/\/auto\.forgelogic-tech\.co\.uk\/api\/auth\/register-website"/);
 assert.match(html,/name="display_name"/);
 assert.match(html,/name="email"/);
 assert.match(html,/name="password"/);
 assert.doesNotMatch(html,/TradingView|US30 Copilot Beta/);
});
test('assistant first screen links to website registration',()=>{
 assert.match(app,/https:\/\/www\.forgelogic-tech\.co\.uk\/automotive-register\.html/);
});
