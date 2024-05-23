/// <reference types="cypress" />

describe('JSON OBJECTS',()=>{

    it('Json objects',()=>{
    cy.openHomePage()


    const simpleObjects={"key":"value"}  //simple objects
    const simpleObjectsArray=["one","two","three"] // start with index 0 so one is zero

    const arrayOfObjects=[{"key":"value"},{"key1":"value1"}]  //array of objects and each objects has key and value

    const typesOfData={"string":"this is a string","number":10} //objects with string and number

    const mixTypesOfData={
        "FirstName":"Hassaan",
        "LastName":"Farooq",
        "Age":"25",

        "Students":[{
            "firstName":"Sara",
            "lastName":"Conor"
        },
        {
            "firstName":"Mike",
            "lastName":"Hussy"
        }
    ]
    }

    console.log(simpleObjects.key)
    console.log(simpleObjects["key"])
    console.log(simpleObjectsArray[1])
    
    console.log(arrayOfObjects[1].key1)
    
    console.log(mixTypesOfData.Students[1].firstName)
    
    

})


})
