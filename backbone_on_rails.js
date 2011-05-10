Backbone.Model.prototype.old_parse = Backbone.Model.prototype.parse
Backbone.Model.prototype.parse = function() {
  var params = this.old_parse.apply(this, arguments);
  var result = {}
  if (this.params_namespace)
    result = params[this.params_namespace];
  else
    result = params;
  return result;
}

Backbone.Model.prototype.old_toJSON = Backbone.Model.prototype.toJSON
Backbone.Model.prototype.toJSON = function() {
  var json = this.old_toJSON();
  var result = {}
  if (this.params_namespace)
    result[this.params_namespace] = json;
  else
    result = json;
  return result;
}

Backbone.Collection.prototype.old_parse = Backbone.Collection.prototype.parse
Backbone.Collection.prototype.parse = function() {
  var params = this.old_parse.apply(this, arguments);
  var collection = this;
  if (this.params_namespace) {
    var result = []
    $(params).each(function(){result.push(this[collection.params_namespace])})
    return result;
  } else
    return params;
}
