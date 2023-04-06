//A users Email

let gMail = {
   mailBoxes:{
        
        inBox:[{ 
                Subject:  "Assignment graded",
                Content:  " Exaterna Css Assignment",
                Sender:   " Full Stack 101",
                Recepiant: "Me" ,             
                }, 

                {
                Subject: "Assignment",
                Content: " Shopping cart",
                Sender:  " Full Stack 102",
                Recepiant: "Me" ,             
                }
                ],
        sent:[{
                Subject: "No subject",
                Content:  " Greetings",
                Sender:   " Me",
                Recepiant: "Wardi" ,             
        }
        ],
        draft:[{
                Subject:   "draft",
                Content:   " Greetings",
                Sender:    " Me",
                Recepiant: "rahel",
        }
        ]
 },
//Get a list of mailbox names; inbox, sent, draft
 display: function displayBoxes(){
        for(let index in gMail.mailBoxes){

                console.log(index);
        }

  },
// Get a list of emails
  getMail:function  listMail(){
        for(let index of gMail.mailBoxes.inBox){
                console.log(index.Subject);
        }

  },
// Mark an email as sent - it removes file from draft and add it so sent

  moveMails: function transferMail(){

        gMail.mailBoxes.sent.push( gMail.mailBoxes.draft.pop());
  },
  //Get the text of the second email in the visible list
 readMail: function read(){

        console.log(gMail.mailBoxes.sent[1].Content);
 },
//Add a draft email to the drafts mailbox
addToDraft: function addDraft(){

        gMail.mailBoxes.draft.push( {   Subject: "No subject",
                                        Content: "Greetings",
                                        Sender: "Me",
                                        Recepiant: "Wardi"} );
}

}   

gMail.display();
gMail.getMail();
gMail.moveMails();
console.log(gMail.mailBoxes.sent);
gMail.readMail();
gMail.addToDraft();
console.log(gMail.mailBoxes.draft);

    