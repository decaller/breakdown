var view_login_breakdown = {
	cols:[
		{
			gravity:4,
			
			view:"scrollview",
			scroll:"y",
			body:{
				rows:[
					{
						view:"toolbar", elements:[
								{view:"label", label: "Please fill your databoom.space data"}
						]
					},
					{
						view : "form",
						id: "connectForm",
						rows : [
							
							{ view : "text", label : "URL", name : "url", value: "https://t099.databoom.space" },
							{ view : "text", label : "Database", name : "db", value: "b099" },
							{ view : "text", label : "User", name : "user", value:"t099" },
							{ view : "text",type:'password', label : "Password", name : "pass", value:"4614" },
							{ view : "button", label : "Connect", click:connect}
						]
					},
					{
						view:"toolbar", elements:[
								{view:"label", label: "Add New Project"}
						]
					},
					{
						view : "form",
						id: "makeNewProjectForm",
						rows : [
							
							{ view : "text", label : "Name", name : "name"},
							{ view : "text", label : "Id Coll", name : "project_coll"},
							{ view : "button", label : "Build", click:newProject }
						]
					},
					{
						view:"template",
						template: "Project list will show up if you insert correct account information and have at least one project."
					}
				]
			},
				
		},
		{
			view: "multiview",
			gravity:8,
			autoheight:true,
			borderless:true,
			keepViews: true,
			cells:[
				{
					view:"carousel",
					id:"breakdown_news_carousel",
					cols:[
						{ css: "image", data:{src:""} },
						{ css: "image", data:{src:""} }
					]
				},
				{
					id:"project_list",
					rows:[
				
							{
								view:"toolbar", elements:[
										{view:"label", label: "Project List"}
								]
							},
							{
								view:"dataview", 
								id:"project_list_dataview",
								select:true,
								type: {
									height: 60
								},
								template:"<div class='webix_strong'>#name#</div> Collection : #project_coll#",
								on:{
									//open a project function
									onItemClick:function(id, e, node){
										var item = this.getItem(id);
										
										var url = "odata->" + account.url + "/api1/" + account.db + "/collections/"+ item.project_coll + "_main_breakdown";
										$$("treetable_main_breakdown").load(url);
											var dp = new webix.DataProcessor({  
											master:$$("treetable_main_breakdown"), 
											url:url
											});
										$$("treetable_main_breakdown").refresh;
										$$("edit_breakdown").show();
										
									}
								}
								
							}
						]
				}
			]
			
			
				
		},
		
	]
	
};
