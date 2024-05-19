import{j as e,y as d}from"./app-8dbb4787.js";import{c as o,T as s,B as m}from"./typography-2d07d0a0.js";import{M as f}from"./minus-e72b396d.js";import{P as v}from"./plus-640dd055.js";import{c as g,D as b}from"./dashboard-d6f4e649.js";/* empty css            */function y({total_pinjaman:r,total_harga_sewa:a,className:t}){const n=()=>{const l={amount:a};d.post(route("peminjaman.create"),l)};return e.jsxs("div",{className:o("p-6 space-y-6 rounded-lg bg-muted",t),children:[e.jsx(s,{variant:"h2-30/36",weight:"bold",children:"Ringkasan Pinjaman"}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(s,{variant:"p-16/24",className:"text-muted-foreground/50",children:"Total Pinjaman"}),e.jsxs(s,{variant:"p-16/24",weight:"semibold",children:[r," Manga"]})]}),e.jsxs("div",{className:"flex justify-between",children:[e.jsx(s,{variant:"p-16/24",className:"text-muted-foreground/50",children:"Total Harga Sewa"}),e.jsxs(s,{variant:"p-16/24",weight:"semibold",children:["Rp. ",a.toLocaleString("id-ID")]})]})]}),e.jsx(m,{onClick:()=>n(),className:"w-full",children:"Pinjam"})]})}const N=g("Trash",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);function w({volume_id:r,foto:a,harga_sewa:t,harga_sub_total:n,judul_seri:l,jumlah_sewa:c,jumlah_tersedia:x,volume:u}){const h=()=>{const i={volume_id:r,jumlah:1};d.post(route("cart.create"),i)},p=()=>{d.delete(route("cart.delete",{id:r}))},j=()=>{d.delete(route("cart.delete.volume",{id:r}))};return e.jsxs("div",{className:"flex rounded-lg overflow-hidden bg-muted",children:[e.jsxs("div",{className:"w-24 relative flex justify-center items-center",children:[e.jsx("img",{src:a,alt:"manga-cover",width:200,height:300,onError:({currentTarget:i})=>{i.onerror=null,i.src="https://downloadwap.com/thumbs2/wallpapers/2022/p2/abstract/47/e9ne9732.jpg"},className:"absolute w-full h-full object-cover brightness-50"}),e.jsx(s,{variant:"h2-30/36",weight:"semibold",className:"relative text-background",children:u})]}),e.jsxs("div",{className:"p-6 flex-1 flex justify-between items-center",children:[e.jsxs("div",{className:"space-y-0",children:[e.jsxs(s,{variant:"body-14/24",weight:"semibold",className:"flex gap-1.5",children:[e.jsx("span",{children:l}),"•",e.jsxs("span",{children:["Volume ",u]})]}),e.jsxs(s,{variant:"body-14/24",className:"text-muted-foreground/50",children:["Rp. ",t.toLocaleString("id-ID")," / 7 hari"]})]}),e.jsxs("div",{className:"flex gap-6",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(s,{variant:"body-14/24",className:"text-muted-foreground/50",children:"Tersisa"}),e.jsxs(s,{variant:"body-14/24",children:[x," Vol"]})]}),e.jsxs(m,{size:"sm",variant:"outline",className:"flex justify-between gap-4 p-1 border border-primary rounded-md cursor-default bg-muted",children:[e.jsx(f,{onClick:()=>p(),className:o("rounded-sm hover:bg-muted-foreground/10 cursor-pointer",c<=1&&"pointer-events-none text-muted-foreground/50")}),e.jsx(s,{variant:"body-14/24",weight:"bold",children:c}),e.jsx(v,{onClick:()=>h(),className:o("rounded-sm hover:bg-muted-foreground/10 cursor-pointer",c>=x&&"pointer-events-none text-muted-foreground/50")})]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx(s,{variant:"body-14/24",className:"text-muted-foreground/50",children:"Subtotal"}),e.jsxs(s,{variant:"body-14/24",children:["Rp. ",n.toLocaleString("id-ID")]})]}),e.jsxs(m,{size:"sm",variant:"destructive",onClick:()=>j(),className:"w-40 py-1 rounded-md",children:[e.jsx(N,{className:"mr-2 w-4 h-4"}),"Pinjaman"]})]})]})]})]})}function S({success:r,data:a,user:t}){return e.jsx(b,{user:t,children:e.jsx("section",{className:"w-full max-w-[1440px] flex flex-col items-end gap-4 md:gap-8 px-3 md:px-12 py-4 md:py-8",children:e.jsxs("div",{className:"w-full flex items-start gap-4",children:[r&&e.jsx("div",{className:"flex-1 space-y-8",children:a==null?void 0:a.cart.map((n,l)=>e.jsx(w,{...n},l))}),r&&a&&e.jsx(y,{...a,className:"w-full md:w-96"})]})})})}export{S as default};