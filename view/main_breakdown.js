var view_main_breakdown ={
  container:"webix-content",
  cols : [
    {
      type : "line",
      borderless : true,

      rows : [
        {
          view : "toolbar",
          borderless : true,
          css:"bg_panel",
          elements : [
            { label : "Project's Breakdown", view : "label" },
            { view : "button", type : "iconButtonTop", icon : "plus", width : 35 },
            { view : "button", type : "iconButtonTop", icon : "child", width : 35 },
            {
              view : "toggle",
              click : "if($$('cart_add_breakdown').isVisible()){$$('cart_add_breakdown').hide();$$('resizer_add_breakdown').hide();}else{$$('cart_add_breakdown').show();$$('resizer_add_breakdown').show();}",
              type : "iconButtonTop",
              icon : "shopping-cart",
              width : 35
            },
            { view : "button", type : "iconButtonTop", icon : "search", width : 35 }
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
          borderless : true,
          
          editable : true,
          drag : true,
          on : {onBeforeDrop:function(context){context.parent = context.target; context.index = -1;}}
        },
        { view : "resizer", id : "resizer_add_breakdown", hidden : true },
        {
          type : "line",
          borderless : true,
          
          rows : [
            {
              view : "toolbar",
              borderless : true,
              elements : [
                { label : "Breakdown's Cart", view : "label" }
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
              borderless : true,
              drag : true,
              on : {onBeforeDrop:function(context){context.parent = context.target; context.index = -1;}}
            }
          ],
          borderless : false,
          hidden : true,
          id : "cart_add_breakdown"
        }
      ]
    },
    { view : "resizer"},
    {
      view : "scrollview",
      borderless : true,
      css:"mdl-shadow--8dp",
      body : {
        type : "line",
        borderless : true,
        rows : [
          {
                view : "toolbar",
                borderless : true,
                elements : [
                  { label : "Dimension", view : "label" },
                  
                ]
              },
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
            borderless : true,
            rows : [
              {
                view : "toolbar",
                borderless : true,
                elements : [
                  { label : "Dimension", view : "label" },
                  { view : "button", type : "iconButtonTop", icon : "plus", width : 28 }
                ]
              },
              {
                
                autoConfig : true,
                view : "datatable",
                borderless : true,
                navigation : false,
                height : 250,
                columns : [
                  { id : "dimension", header : "Dimension", width : 80, $id : "dimension" },
                  { id : "index", header : "Index", width : 55, $id : "index" },
                  { id : "unit", header : "Unit", width : 65, $id : "unit" },
                  { id : "source", header : "Source", $id : "source", fillspace : true }
                ],
                drag : false
              }
            ]
          },
          {
            type : "line",
            borderless : true,
            rows : [
              {
                view : "toolbar",
                borderless : true,
                elements : [
                  { label : "Items", view : "label" },
                  {
                    type : "iconButtonTop",
                    icon : "shopping-cart",
                    width : 35,
                    view : "toggle",
                    click : "if($$('cart_add_mtw').isVisible()){$$('cart_add_mtw').hide();}else{$$('cart_add_mtw').show();}"
                  },
                  { view : "button", type : "iconButtonTop", icon : "search", width : 28 }
                ]
              },
              {
                
                autoConfig : true,
                view : "datatable",
                borderless : true,
                height : 250,
                columns : [
                  { id : "sku", header : "SKU", width : 100 },
                  { id : "item", header : "Item", fillspace : true, minWidth : 100 },
                  { id : "index", header : "Index", width : 55 },
                  { id : "unit", header : "Unit", width : 65 },
                  { id : "unitprice", header : "Unit Price", width : 100 },
                  { id : "totalprice", header : "Total Price", width : 100 }
                ],
                drag : true
              }
            ]
          },
          
          {
            rows : [
              {
                view : "toolbar",
                borderless : true,
                elements : [
                  { label : "Item's Cart", view : "label" }
                ]
              },
              {
                
                autoConfig : true,
                view : "datatable",
                borderless : true,
                height : 250,
                columns : [
                  { id : "sku", header : "SKU", width : 100 },
                  { id : "item", header : "Item", fillspace : true, minWidth : 100 },
                  { id : "index", header : "Index", width : 55 },
                  { id : "unit", header : "Unit", width : 65 },
                  { id : "unitprice", header : "Unit Price", width : 100 },
                  { id : "totalprice", header : "Total Price", width : 100 }
                ],
                drag : true
              }
            ],
            id : "cart_add_mtw",
            hidden : true
          }
        ]
      },
      scroll : "y"
    }
  ]
}