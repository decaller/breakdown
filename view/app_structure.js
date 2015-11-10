
var app_structure = 
{
  view : "multiview", 
  keepViews : true,
  animate : { subtype:"in", direction : "top"},
  container : "webix-content",
  cells : [
    {
      cols : [
        {
          view : "multiview",
          keepViews : true,
          animate : { direction : "right" },
          cells : [
            view_main_breakdown__project_breakdown,
            view_main_breakdown__items_cart
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
      cols : [
        view_add_breakdown__search ,
        { view : "resizer" },
        view_add_breakdown__search_details
      ]
    },
    {
      cols : [
        view_add_mtw__search,
        { view : "resizer" },
        view_add_mtw__search_details
      ]
    }
  ]
};