
var app_structure = 
{
  view : "accordion", 
  multi:true,
  
  cols : [
    view_main_breakdown__project_breakdown,
    {view:"resizer", id:"breakdown_resizer"},
    { cols:[
      {header: "",id:"search_pane" ,collapsed: true, css:"pane", body:
        {cols:[
          {
          view : "multiview",
          keepViews : true,
          animate : { direction : "right" },
          cells : [
            view_add_breakdown__search,
            view_add_mtw__search
          ]
          }
        ]}
        
      },
      {view:"resizer", id:"details-search_resizer"},
      {header: "",id:"details_pane", css:"pane",collapsed: true, body: view_main_breakdown__breakdown_details}
    ]
          
    }
        
     
     
  ]
}
 