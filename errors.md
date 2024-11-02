                                             Errors:
1.This had taken a long time to resolve coz ihavent added email part in any of my model.js.
2.When you are using a middleware function I forgot to put next(); which created a mess and took almost 3hrs.
3.This one was in job.model, when we use .split() method it will return an array but I kept it as a string
    requirements: {
    type: Array,
    required: true,
  },
4.This was related to populate() function the path is
                  .populate({ path: "companyId" })  [name that you have given in the current schema]
                  .populate({ path: "Company" })   [not the name of that function/model]
5.I am the biggest asshole If I want to refer the applications I as an asshole reffered to Company and searching for an error.WTF This literally ate the time.
