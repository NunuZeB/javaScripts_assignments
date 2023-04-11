class Job{
   constructor(name,  industry, requiredDegree, field, requiredExperience){
        this.name = name;
        this.industry = industry;
        this.requiredDegree = requiredDegree;
        this.field = field;
        this.requiredExperience =requiredExperience;
    }
    
    getName(name){

        return this.name;
    }
    getfieldIndustry(){
        console.log (`The field is ${this.field}  and the industry is ${this.industry} `);
} 
    getRequiredExperience(){
        return this.requiredExperience;
}
    getRequiredDegree()
{
    return this.requiredDegree;
}
}
//extended class 
class JobTraining extends Job{
    constructor(name,  industry, field, requiredExperience,crashCourse){
        super( name,  industry, field, requiredExperience );
        this.JobTraining =crashCourse;    
    }
    getTrained(){
    console.log("Intense six month training");
    }
    //get location of training
    courseLocation(){
        console.log("This " + this.getName() +  " is given in Charlotte and Minneapolis");
    }
}

let ssisDeveloper =new Job('SISI Developer','Wells Fargo','  4 years degree',' IT', '3 years of related work');
    console.log(ssisDeveloper.getName());
    console.log(ssisDeveloper.getRequiredDegree());
    console.log(ssisDeveloper.getRequiredExperience());

let sqlDeveloper  =new Job('SQL Developer','Wells Fargo','4 years degree',' IT', '3 years of related work');
    console.log(sqlDeveloper. getfieldIndustry());
    console.log(sqlDeveloper.getRequiredExperience());
let qualityAssurance =new Job('QA','Wells Fargo','4 years degree',' IT', '3 years of related work');
    console.log(sqlDeveloper. getfieldIndustry());
    console.log(sqlDeveloper.getRequiredExperience())

let JobTraining1 = new JobTraining('Training','Wells Fargo','None','intense hands on trainging');
    console.log(JobTraining1.getTrained());
    console.log(JobTraining1.courseLocation());