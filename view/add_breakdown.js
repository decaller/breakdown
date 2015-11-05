var view_add_breakdown = {
  cols : [
    {
      type : "line",
      rows : [
        {
          view : "toolbar",
          elements : [
            { view : "button", type : "iconButton", icon : "arrow-left", width : 28 },
            { label : "Search", view : "search" }
          ]
        },
        {
          columns : [
            {
              id : "item",
              header : "Item",
              fillspace : true,
              template : "{common.treetable()} #value#"
            },
            { id : "index", header : "Index Unit", width : 65 },
            { id : "total", header : "Total Price", width : 100 },
            { id : "menu", header : "", width : 35 }
          ],
          view : "treetable",
          url : "demo->tree",
          
          on : {}
        }
      ]
    },
    { view : "resizer" },
    {
      view : "scrollview",
      body : {
        type : "line",
        rows : [
          { label : "Label", view : "label", height : 40 },
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
                  { label : "Dimension", view : "label" },
                  
                ]
              },
              {
                url : "demo->table",
                autoConfig : true,
                view : "datatable",
                navigation : false,
                height : 250,
                columns : [
                  { id : "dimension", header : "Dimension", width : 80, $id : "dimension" },
                  { id : "index", header : "Index", width : 55, $id : "index" },
                  { id : "unit", header : "Unit", width : 65, $id : "unit" },
                  { id : "source", header : "Source", $id : "source", fillspace : true }
                ],
              
              }
            ]
          },
          {
            type : "line",
            rows : [
              {
                view : "toolbar",
                elements : [
                  { label : "Items", view : "label" }
                ]
              },
              {
                url : "demo->table",
                autoConfig : true,
                view : "datatable",
                height : 250,
                columns : [
                  { id : "sku", header : "SKU", width : 100 },
                  { id : "item", header : "Item", fillspace : true, minWidth : 100 },
                  { id : "index", header : "Index", width : 55 },
                  { id : "unit", header : "Unit", width : 65 },
                  { id : "unitprice", header : "Unit Price", width : 100 },
                  { id : "totalprice", header : "Total Price", width : 100 }
                ]
              }
            ]
          }
        ]
      },
      scroll : "y"
    }
  ]
}