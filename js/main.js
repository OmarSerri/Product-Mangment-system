var productNameInput = document.getElementById('productNameInput')
var productPriceInput = document.getElementById('productPriceInput')
var productCategoryInput = document.getElementById('productCategoryInput')
var productDescInput = document.getElementById('productDescInput')
var productContainer

if (localStorage.getItem('theProducts') !=null)
{
    productContainer = JSON.parse(localStorage.getItem('theProducts'))
    displayProduct(productContainer)
}
else
{
    productContainer = []
}

function addProduct()
{
    var product =
    {
        name:productNameInput.value,
        price:productPriceInput.value,
        category:productCategoryInput.value,
        desc:productDescInput.value
    }
    productContainer.push(product)
    localStorage.setItem('theProducts' , JSON.stringify(productContainer))
    clearForm()
    displayProduct(productContainer)

}

function clearForm()
{
    productNameInput.value = ""
    productPriceInput.value = ""
    productCategoryInput.value = ""
    productDescInput.value = ""
}

function displayProduct(productList)
{
    var tableRow = ``
    for (i=0 ; i < productList.lenght ; i++)
    {
        tableRow+=
        `<tr class="text-center">
            <td>${i}</td>
            <td>${productList[i].name}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].category}</td>
            <td>${productList[i].desc}</td>
            <td><button class="btn btn-sm btn-outline-primary">Update</button></td>
            <td><button class="btn btn-sm btn-outline-warning">Delete</button></td>
        </tr>`
    }
    document.getElementById('tableBody').innerHTML = tableRow;
}