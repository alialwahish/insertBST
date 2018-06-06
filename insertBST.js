function BST(){
    this.head=null;    

function Node(val){
    this.val=val;
    this.left=null;
    this.right=null;

}

    this.insert = function(val){
        newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
       
        }
        else{
            var itr = this.head;
            while(itr){
                if(val>itr.val){
                    if(!itr.right){
                        itr.right=newNode;
                        return this;
                    }
                    else{
                        itr=itr.right;
                    }
                }
                else if(val<itr.val){
                    if(!itr.left){
                        itr.left=newNode;
                        return this;
                    }
                    else{
                        itr=itr.left;
                        return this;
                    }
                }
            }
            
        }
    }

}
var bst = new BST();
bst.insert(30)
bst.insert(10)
bst.insert(15)
bst.insert(100)

console.log(bst.head);

