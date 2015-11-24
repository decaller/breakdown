var view_add_breakdown__search = 
{
  
  type : "line",
  rows : [
    {
      view : "toolbar",
      elements : [
        { click : back_to_main, view : "button", type : "iconButton", icon : "arrow-left", width : 28 },
        { label : "Search", view : "search" , color : "white"}
      ]
    },
    {
      columns : [
        {
          id : "br_search_item",
          header : "Item",
          fillspace : 2,
          template : "{common.treetable()} #value#"
        },

        { id : "br_index", header : "Index" , fillspace : 0.7},
        { id : "br_unit", header : "Unit", fillspace : 1},
        { id : "br_child_prc", header : "Child", fillspace : 1 },
        { id : "br_mtw_prc", header : "MTW", fillspace : 1 },
        { id : "br_total_prc", header : "Total", fillspace : 1.5 },
        { id : "br_menu", header : "", fillspace : 0.2  }
      ],
      view : "treetable",
      url : "demo->tree",
      
      on : {}
    }
  ]
};

var view_add_breakdown__search_details = 
{
  type : "line",
  rows : [
    { 
      view : "toolbar",
      borderless : true,
      elements : [
        { label : "Breakdown Item's Detail", view : "label", width : 300  }
      ]
    },
    {
      view : "scrollview",
      scroll : "y",
      body : {
        rows : [
        { view:"textarea" , height:150, label:"Description", labelPosition:"top" },
          {

            view : "carousel",
            css : "webix_dark",
            cols : [
              { view : "template", template : "View A" },
              { view : "template", template : "View B" }
            ],
            height : 200
          },
          
          {
            type : "line",
            rows : [
              {
                view : "toolbar",
                elements : [
                  { label : "Items", view : "label" },
                  
                ]
              },
              {
                
                autoConfig : true,
                view : "datatable",
                height : 350,
                columns : [
                  { id : "mtw_sku", header : "SKU", fillspace : 1 },
                  { id : "mtw_item", header : "Item", fillspace :2 },
                  { id : "mtw_index", header : "Index", fillspace : 0.7 },
                  { id : "mtw_unit", header : "Unit", fillspace : 1 },
                  { id : "mtw_unitprice", header : "Unit Price", fillspace : 1.5 },
                  { id : "mtw_totalprice", header : "Total Price", fillspace : 1.8 }
                ],
                drag : true
              }
            ]
          }
        ]
      }
    }
  ]
};