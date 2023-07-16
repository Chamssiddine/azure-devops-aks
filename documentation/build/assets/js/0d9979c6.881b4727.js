"use strict";(self.webpackChunkremote_dev_env=self.webpackChunkremote_dev_env||[]).push([[4173],{9830:(e,t,o)=>{o.r(t),o.d(t,{Highlight:()=>p,assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=o(7462),a=(o(7294),o(3905)),r=o(2004);const i={sidebar_position:2},s=void 0,l={unversionedId:"Infrastructure as a Code/Terraform Modules/Workstation",id:"Infrastructure as a Code/Terraform Modules/Workstation",title:"Workstation",description:"Module Purpose",source:"@site/docs/Infrastructure as a Code/Terraform Modules/Workstation.md",sourceDirName:"Infrastructure as a Code/Terraform Modules",slug:"/Infrastructure as a Code/Terraform Modules/Workstation",permalink:"/docs/Infrastructure as a Code/Terraform Modules/Workstation",draft:!1,editUrl:"https://github.com/Chamssiddine/remote-development-environment/docs/Infrastructure as a Code/Terraform Modules/Workstation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Root Module",permalink:"/docs/Infrastructure as a Code/Terraform Modules/Root Module"},next:{title:"Google kubernetes Engine Cluster",permalink:"/docs/Infrastructure as a Code/Terraform Modules/Google kubernetes Engine Cluster"}},d={},u=[{value:"Module Purpose",id:"module-purpose",level:2},{value:"Adding new developer",id:"adding-new-developer",level:2},{value:"1. Navigate to the <strong>Workstation Module</strong>",id:"1-navigate-to-the-workstation-module",level:3},{value:"2. Modify the <strong>main.tf</strong> File",id:"2-modify-the-maintf-file",level:3},{value:"3. Save the <strong>main.tf</strong> file.",id:"3-save-the-maintf-file",level:3},{value:"4. Apply the changes and type in the following command:",id:"4-apply-the-changes-and-type-in-the-following-command",level:3},{value:"Conclusion",id:"conclusion",level:2}],p=e=>{let{children:t,color:o}=e;return(0,a.kt)("span",{style:{backgroundColor:o,borderRadius:"20px",color:"#fff",padding:"10px",cursor:"pointer"},onClick:()=>{alert("this is the map for the developer instances modify it as you wish")}},t)},m={toc:u,Highlight:p},c="wrapper";function h(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"module-purpose"},"Module Purpose"),(0,a.kt)("p",null,"The purpose of this module is to create the necessary infrastructure for developers, starting from firewall configuration, VPC setup, subnet configuration, and provisioning instances. It also provides the flexibility to easily add new instances for new developers or modify existing instances."),(0,a.kt)("h2",{id:"adding-new-developer"},"Adding new developer"),(0,a.kt)("h3",{id:"1-navigate-to-the-workstation-module"},"1. Navigate to the ",(0,a.kt)("strong",{parentName:"h3"},"Workstation Module")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd infrastructure/modules/workstation\n")),(0,a.kt)("h3",{id:"2-modify-the-maintf-file"},"2. Modify the ",(0,a.kt)("strong",{parentName:"h3"},"main.tf")," File"),(0,a.kt)("p",null,"Locals ",(0,a.kt)(p,{color:"#25c2a0",mdxType:"Highlight"},"section")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'locals {\n  // to add new workstation just add a new list with it\'s name, machine_type, your prefered os and zone\n  workstations = {\n  "workstation1" = { machine_type = "e2-medium", zone = "europe-west9-a", tag = ["ping", "ssh","metrics"], image = "debian-cloud/debian-11", bucket_name = "uniquename" },  \n  "workstation2" = { machine_type = "e2-micro", zone = "europe-west9-a", tag = ["ping", "ssh","metrics"], image = "debian-cloud/debian-11", bucket_name = "uniquename" },\n "workstation3" = { machine_type = "e2-micro", zone = "europe-west9-a", tag = ["ping", "ssh"], image = "debian-cloud/debian-11", bucket_name = "uniquename" }\n  }\n}\n')),(0,a.kt)("p",null,"Add a new entry for the new developer's workstation in the workstations map. Here's an example of how it should look:"),(0,a.kt)("div",{className:"video__wrapper"},(0,a.kt)(r.Z,{className:"video__player",controls:!0,height:"100%",url:"/workstation.mov",width:"100%",mdxType:"ReactPlayer"})),(0,a.kt)("h3",{id:"3-save-the-maintf-file"},"3. Save the ",(0,a.kt)("strong",{parentName:"h3"},"main.tf")," file."),(0,a.kt)("h3",{id:"4-apply-the-changes-and-type-in-the-following-command"},"4. Apply the changes and type in the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"$ terrafrom apply\n")),(0,a.kt)("p",null,"This will provision a new VM for the new developer with the specified settings."),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"That's it! You should now have a new VM for the new developer ready to use. If you have any questions or run into any issues, feel free to reach out to me for assistance."))}h.isMDXComponent=!0}}]);