
var app_structure = 
{
  view : "accordion", 
  multi:true,
  
  cols : [
    view_main_breakdown__project_breakdown,
    {view:"resizer"},
    {header: "Search", body:
        {
              view : "multiview",
              keepViews : true,
              animate : { direction : "right" },
              cells : [
                view_add_breakdown__search,
                view_add_mtw__search
              ]
        }
     },
     {view:"resizer"},
     {header: "Details", body: view_main_breakdown__breakdown_details}
  ]
}
 