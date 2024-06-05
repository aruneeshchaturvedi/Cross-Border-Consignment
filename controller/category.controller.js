import '../models/connection.js';
import CategorySchemaModel from '../models/category.model.js'; 
import url from 'url';
import rs from 'randomstring'; 
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export var save=async (req,res,next)=>{
    var cDetails=req.body
    console.log(cDetails)
    var caticon=req.files.caticon;
    var caticonnm=Date.now()+"_"+rs.generate(10)+"_"+caticon.name;
    // var caticonnm=caticon.name;
    cDetails.caticonnm=caticonnm;
    var uploadpath=path.join(__dirname,"../../myreact/public/assets/uploads/caticons",caticonnm);
    var cList = await CategorySchemaModel.find();
    var l=cList.length;
    var _id=l==0?1:cList[l-1]._id+1;
    cDetails={...cDetails,"_id":_id};
    try
    {
     var category=await CategorySchemaModel.create(cDetails);
     caticon.mv(uploadpath); 
     res.status(201).json({"status":true});
    }
    catch(err)
    {
     console.log(err);
     res.status(500).json({"status": false});
    }
};

export var fetch=async (req,res,next)=>{
  var condition_object=url.parse(req.url,true).query;
  var cList = await CategorySchemaModel.find(condition_object);
  var l=cList.length;
  if(l!=0)
    return res.status(201).json(cList);
  else
    return res.status(500).json({"result": "Server Error"});
}

export var deleteCategory=async(req,res,next)=>{
  var condition_object=req.body;
  var category = await CategorySchemaModel.find(condition_object);
  if(category.length!=0){
    let result = await CategorySchemaModel.deleteMany(condition_object); 
    if(result)
     return res.status(201).json({"msg":"success"});
    else
     return res.status(500).json({error: "Server Error"});
  }
  else
    return res.status(404).json({error: "Resource not found"}); 
}

export var updateCategory=async(req,res,next)=>{
  let cDetails = await CategorySchemaModel.findOne(JSON.parse(req.body.condition_obj));
  if(cDetails){
     let category=await CategorySchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)});   
     if(category)
      return res.status(201).json({"msg":"success"});
     else
      return res.status(500).json({error: "Server Error"});
  }
  else
   return res.status(404).json({error: "Requested resource not available"});
}