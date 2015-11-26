
var app_structure = 
{
  view : "multiview", 
  keepViews : true,
  animate : { direction : "top"},
  cells : [
    {
      id : "breakdown_main",
      cols : [
        {
          view : "multiview",
          keepViews : true,
          animate : { direction : "right" },
          cells : [
            view_main_breakdown__project_breakdown,
            view_main_breakdown__mtw_cart
          ]
        },
        { view : "resizer" },
        {
          view : "multiview",
          keepViews : true,
          animate : {  direction : "left" },
          cells : [
            view_main_breakdown__breakdown_details,
            view_main_breakdown__breakdown_cart
          ]
        }
      ]
    },
    {
      id : "breakdown_search",
      cols : [
        view_add_breakdown__search ,
        { view : "resizer" },
        view_add_breakdown__search_details
      ]
    },
    {
      id : "mtw_search",
      cols : [
        view_add_mtw__search,
        { view : "resizer" },
        view_add_mtw__search_details
      ]
    }
  ]
};