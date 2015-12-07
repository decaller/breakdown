
var app_structure = 
{
  view : "accordion", 
  multi:true,
  borderless:true,
  css:"smooth",
  cols : [
    {body:view_main_breakdown__project_breakdown},
    {view:"resizer", id:"breakdown_resizer",borderless:true},
    {header: "",id:"search_pane" ,borderless:true,headerAltHeight:0,collapsed: true, css:"pane", body:
        {
        view : "multiview",
        borderless:true,
        keepViews : true,
        cells : [
          view_add_breakdown__search,
          view_add_mtw__search
        ]
        }
      },
      {view:"resizer",borderless:true, id:"details-search_resizer"},
      {header: "",id:"details_pane", css:"pane",borderless:true,headerAltHeight:0,collapsed: true, body: view_main_breakdown__breakdown_details}
    ]
          
}
        
 