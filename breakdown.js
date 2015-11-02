if (Meteor.isClient) {
  

webix.ready(function(){
var persons = webix.proxy("databoom", "https://samples.databoom.space/api1/sandboxdb/collections/people")
grid = webix.ui({
  container:"breakdown",
  rows : [
    {
      cols : [
        {
          type : "line",
          rows : [
            {
              view : "toolbar",
              elements : [
                { label : "Label", view : "label" },
                { view : "button", label : "Button 1" },
                { view : "button", label : "Button 2" },
                { url : "demo->menu", type : { subsign : true },
                  view : "menu"
                }
              ]
            },
            {
              view : "toolbar",
              elements : [
                { view : "button", label : "Button 1" },
                { view : "button", label : "Button 2" },
                { view : "spacer" }
              ]
            },
            {
              type : "line",
              cols : [
                {
                  url : "demo->tree",
                  columns : [
                    {
                      id : "value",
                      header : "Film title",
                      fillspace : true,
                      template : "{common.treetable()} #value#"
                    },
                    { id : "id", header : "ID", width : 55 }
                  ],
                  view : "treetable"
                }
              ]
            }
          ],
          borderless : true
        },
        { view : "resizer" },
        {
          type : "line",
          rows : [
            {
              view : "toolbar",
              elements : [
                { label : "Label", view : "label" },
                { view : "button", label : "Button 1" },
                { view : "button", label : "Button 2" },
                { url : "demo->menu", type : { subsign : true },
                  view : "menu"
                }
              ]
            },
            {
              view : "toolbar",
              elements : [
                { view : "button", label : "Button 1" },
                { view : "button", label : "Button 2" },
                { view : "spacer" }
              ]
            },
            {
              view : "carousel",
              css : "webix_dark",
              cols : [
                { view : "template", template : "View A" },
                { view : "template", template : "View B" }
              ]
            },
            { url : "demo->table", autoConfig : true, view : "datatable" },
            { url : "demo->table", autoConfig : true, view : "datatable" }
          ],
          borderless : true
        }
      ],
      borderless : true
    }
  ],
  borderless : true
})
});


  
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
