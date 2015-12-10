function webixfilter2odata(filter) {
    if (!filter) {
        return "?$inlinecount=allpages&$top=100";
    }
    var query = '';
    if (filter.count) {
        query = "$top=" + filter.count;
    }
    if (filter.from) {
        if (query != '')
            query += '&'
        query += "$skip=" + filter.from;
    }
    if (filter.sort) {
        if (query != '')
            query += '&'
        query += '$orderby=' + filter.sort.id;
        if (filter.sort.dir === 'desc')
            query += ' desc';
    }

    var filterstr;

    if (filter.filter) {
        var a = [];
        for (var prop in filter.filter) {
            if (filter.filter[prop] === '')
                continue;
            a.push("(contains(" + prop + ",'" + filter.filter[prop] + "'))");
        }
        if (a.length != 0)
            filterstr = a.join(' and ');
    }
    if (filter.filter2) {
        var a = [];
        for (var prop in filter.filter2) {
            if (filter.filter2[prop] === '')
                continue;
            a.push("(" + prop + " eq '" + filter.filter2[prop] + "')");
        }
        if (a.length != 0) {
            if (filterstr)
                filterstr += ' and ' + a.join(' and ')
            else
                filterstr = a.join(' and ');
        }
    }
    if (filterstr) {
        if (query != '')
            query += '&'
        query += '$filter=' + filterstr;
    }

    if (query === '')
        return;
    return '?' + query;
}

function updateobj(obj, obj2) {
    for (var prop in obj2) {
        var val = obj2[prop];
        if (Array.isArray(val)) {
            obj[prop] = val;
        }
        else if (typeof val == "object") // this also applies to arrays or null!
            updateobj(obj[prop], val);
        else
            obj[prop] = val;
    }
}
webix.proxy.databoom = {
    $proxy: true,
    constfilter: {},
    constdata: {},
    load: function (view, callback, details0) {
        //your loading pattern
        console.log(this.prop1);
        if(!details0)
            var details = this.constfilter;
        else {
            var details = webix.copy(details0);
            updateobj(details, this.constfilter);
        }
        var query = webixfilter2odata(details)
        var url = this.source;
        if (query)
            url += query;
        webix.ajax(url,
            {
                success: function (data, data2, data3) {
                    //console.log(data)
                    var res = JSON.parse(data);
                    var wr = { data: res.d.results };
                    if (res.d.__skip)
                        wr.pos = res.d.__skip;
                    if (res.d.__count)
                        wr.total_count = res.d.__count;
                    webix.ajax.$callback(view, callback, wr)
                },
                error: function (data, data2, data3, data4) {
                    for (var i = 0; i < callback.length; i++)	//there can be multiple callbacks
                        if (callback[i]) {
                            var method = callback[i].error;
                            if (method && method.call)
                                method.call(view, data, data2, data3);
                        }
                }
            });
    },
    save: function (view, update, dp, callback) {
        //your saving pattern for single records
        if (update.operation === 'delete') {
            webix.ajax().del(this.source + "(" + update.id + ")", null, callback);
        } else {
            updateobj(update.data, this.constdata);

            webix.ajax().headers({
                "Content-type":"application/json"
            }).post(this.source, JSON.stringify(update.data), callback);
            //webix.ajax().post(this.source, update.data, callback);
        }
    },
    saveAll: function (view, update, dp, callback) {
        //your saving pattern
        for (var i = 0; i < updates.length; i++) { }
    },
    result: function (state, view, dp, text, data, loader) {
        //your logic of serverside response processing
        if (state.status === 'delete')
            var stat = 'delete'
        else
            var stat = 'update'
        dp.processResult({
            id: state.id,
            status: stat //state.status
        });
    },
    //other custom properties and methods
    prop1:"test"
    //    method1:function(){  }
};

function organizetree(a) {
    var r = [];
    var c = {};
    for (var i = 0; i < a.length; i++) {
        c[a[i].id] = a[i];
        if (!a[i].data)
            a[i].data = [];
        if (!a[i].parent)
            r.push(a[i])
        else if (a[i].parent === '0') {
            a[i].parent = undefined;
            r.push(a[i])
        }
    }
    for (var i = 0; i < a.length; i++) {
        if (a[i].parent) {
            var e = c[a[i].parent];
            if(e)
                e.data.push(a[i])
        }
    }

    return r;
}
webix.proxy.databoomtree = {
    constfilter: { sort: {id:"value"}},
    $proxy: true,
    load: function (view, callback, details0) {
        //your loading pattern
        console.log(this.prop1);
        if (!details0)
            var details = this.constfilter;
        else {
            var details = webix.copy(details0);
            updateobj(details, this.constfilter);
        }
        var query = webixfilter2odata(details)
        var url = this.source;
        if (query)
            url += query;
        webix.ajax(url,
            {
                success: function (data, data2, data3) {
                    //console.log(data)
                    var res = JSON.parse(data);
                    var tr = organizetree(res.d.results)
                    var wr = { data: tr };
                    webix.ajax.$callback(view, callback, wr)
                },
                error: function (data, data2, data3, data4) {
                    for (var i = 0; i < callback.length; i++)	//there can be multiple callbacks
                        if (callback[i]) {
                            var method = callback[i].error;
                            if (method && method.call)
                                method.call(view, data, data2, data3);
                        }
                }
            });
    },
    save: function (view, update, dp, callback) {
        //your saving pattern for single records
        if (update.operation === 'delete') {
            webix.ajax().del(this.source + "(" + update.id + ")", null, callback);
        } else {
            webix.ajax().post(this.source, update.data, callback);
        }
    },
    saveAll: function (view, update, dp, callback) {
        //your saving pattern
        for (var i = 0; i < updates.length; i++) { }
    },
    result: function (state, view, dp, text, data, loader) {
        //your logic of serverside response processing
        if (state.status === 'delete')
            var stat = 'delete'
        else
            var stat = 'update'
        dp.processResult({
            id: state.id,
            status: stat //state.status
        });
    },
    //other custom properties and methods
    prop1: "test"
    //    method1:function(){  }

};

webix.protoUI({
    name: "gridpanel",
    $init: function (config) {

        var a = config.columns;
        for (i in a) {
            if (!a[i].editor)
                a[i].editor = "text"
            if (!a[i].sort)
                a[i].sort = "text"
        }


        if (!config.newrec)
            config.newrec = {};
        if (config.url)
            config.save = config.url;

        var dtable = webix.copy(config);
        dtable.view = "datatable";
        dtable.select = "row";
        dtable.editable = true;
        dtable.autoConfig = true;


        config.rows = [
          {
              view: "toolbar",
              css: "myh",
              elements: [
              { gravity: 10 },
              {
                  view: "button", type: "iconButton", icon: "plus", click: function () {
                      var t = $$(dtable.id);
                      t.clearSelection();
                      var data = { id: webix.uid() };
                      t.add( data, 0);
                      t.showItemByIndex(0);
                      t.select(data.id, false);
                  }, width: 35
              },
              {
                  view: "button", type: "iconButton", icon: "minus", click: function () {
                      var a = $$(dtable.id);
                      a.editCancel();
                      a.waitData.then(function () {
                          //when we have data - do some actions
                          var sel = $$(dtable.id).getSelectedId();
                          $$(dtable.id).moveSelection('down');
                          $$(dtable.id).remove(sel);
                      });
                  }, width: 35
              },
              ]
          },
          dtable
        ];

    }
}, webix.ui.layout);

webix.protoUI({
    name: "header",
    $init: function (config) {

        var data = config.cols;
        config.cols = undefined;
        config.rows = [
            { type: "header", template: config.template },
            { cols: data }
        ];
    }
}, webix.ui.layout);

function preparetreeform() {
    var fcall;
    var form = {
        view: "form",
        borderless: true,
        elements: [
            { view: "text", label: 'Value', name: "value", value: "123" },
            {
                margin: 5, cols: [
                    {
                        view: "button", value: "Submit", click: function () {
                            var frm = this.getParentView().getParentView()
                            var data = frm.getValues();
                            if (frm.validate()) { //validate form
                                fcall(data)
                                frm.hide(); //hide window
                            }
                            else
                                webix.message({ type: "error", text: "Form data is invalid" });
                        }
                    },
                    {
                        view: "button", value: "Cancel", click: function () {
                            this.getParentView().getParentView().hide(); //hide window
                        }
                    }
                ]
            }
        ],
        //rules: {
        //    "email": webix.rules.isEmail,
        //    "login": webix.rules.isNotEmpty
        //},
        //elementsConfig: {
        //    labelPosition: "left",
        //}
    };

    var winId = webix.uid();

    webix.ui({
        view: "popup",
        id: winId,
        head: false,
        body: webix.copy(form)
    });

    function showForm(winId, node) {
        $$(winId).getBody().clear();
        $$(winId).show(node);
        $$(winId).getBody().focus();
    }

    var showform = function (node,call) {
        fcall = call;
        $$(winId).getBody().clear();
        $$(winId).show(node);
        $$(winId).getBody().focus();
        //showForm(winId, this.$view)
    }
    return showform;
}

webix.protoUI({
    name: "treepanel",
    $init: function (config) {

        var a = config.columns;
        for (i in a) {
            if (!a[i].editor)
                a[i].editor = "text"
            if (!a[i].sort)
                a[i].sort = "text"
        }

        if (!config.newrec)
            config.newrec = {};
        config.save = config.url;

        var dtable = webix.copy(config);
        dtable.view = "tree";
        dtable.select = true;
        dtable.editable = true;
        dtable.autoConfig = true;

        var showform = preparetreeform(config.form);
        config.rows = [
          {
              view: "toolbar",
              css: "myh",
              elements: [
                  //{ view: "text", value: "wqrqwe ksldfkldsjf lsdjf lkdsajf lksdj"},
              {  },
              {
                  view: "button", type: "iconButton", icon: "plus", click: function () {
                      showform(this.$view, function (data) {
                            var t = $$(dtable.id);
                            var si = t.getSelectedId();
                            if (si) {
                                var it = t.getItem(si);
                                t.add(data, 0, it.parent);
                                t.sort("#value#", "asc")
                                t.unselect(si);
                                t.select(data.id, false);
                            } else {
                                t.add(data, 0);
                                t.sort("#value#", "asc")
                                t.select(data.id, false);
                            }
                      })
                  }, width: 35
              },
              {
                  view: "button", type: "iconButton", icon: "child", click: function () {
                      var t = $$(dtable.id);
                      var parentId = t.getSelectedId();
                      if (parentId) {
                          showform(this.$view, function (data) {
                              var t = $$(dtable.id);
                              t.add(data, 0, parentId);
                              t.sort("#value#", "asc")
                              t.unselect(parentId);
                              t.select(parentId, false);
                          })
                      } else
                          webix.alert("Select node")
                  }, width: 35
              },
              {
                  view: "button", type: "iconButton", icon: "minus", click: function () {
                      var tree = $$(dtable.id);
                      var nodeId = tree.getSelectedId();
                      var next = tree.getNextId(nodeId);
                      tree.remove(nodeId);
                      tree.select(next, false);
                  }, width: 35
              }
              ]
          },
          dtable
        ];

    }
}, webix.ui.layout);

function masterdetail(view1, view2, str) {
    var cells = str.split('=');
    var f1 = cells[0].trim();
    if (f1 != 'id') {
        webix.message({ type: "error", text: "Not realized yet!" });
        return;
    }
    var f2 = cells[1].trim();
    var masterview = $$(view1);
    masterview.attachEvent("onItemClick", function (id, e, node) {
        var item = this.getItem(id);
        var slview = $$(view2);
        slview.clearAll();

        var ur = slview.config.slaveurl;
        slview.editCancel();

        if (!ur)
            ur = slview.s.url;
        ur.constfilter = { filter2: {} };
        ur.constfilter.filter2[f2] = item.id;
        ur.constdata[f2] = [{ id: item.id }];
        slview.load(ur)
        webix.dp({ master: slview, url: ur, save: ur });
    });
}
