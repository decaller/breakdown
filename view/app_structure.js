var app_structure =
{
  view : "multiview",
  container : "webix-content"
  cells : [
    {
      cols : [
        {
          view : "multiview",
          cells : [
            { view_main_breakdown__project_breakdown },
            { view_main_breakdown__items_cart }
          ]
        },
        { view : "resizer" },
        {
          view : "multiview",
          cells : [
            { view_main_breakdown__breakdown_details },
            { view_main_breakdown__breakdown_cart }
          ]
        }
      ]
    },
    {
      cols : [
        { view_add_breakdown__search },
        { view : "resizer" },
        { view_add_breakdown__search_details }
      ]
    },
    {
      cols : [
        { view_add_mtw__search },
        { view : "resizer" },
        { view_add_mtw__search_details }
      ]
    }
  ]
}