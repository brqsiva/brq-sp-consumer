import { BRQSmartPopup } from 'brq-smart-popup'

function UnFormatted() {
  const product = { /* paste the full JSON here as shown above */ }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-6">
      <div>
        <input
        id="title"
        name="unformatted-title-123"
        className="w-full px-4 py-2 border rounded"
        placeholder="Title"
      />
      <input
        id="description"
        name="unformatted-description-123"
        className="w-full px-4 py-2 border rounded"
        placeholder="Description"
      />
      <input
        id="category"
        name="unformatted-category-123"
        className="w-full px-4 py-2 border rounded"
        placeholder="Category"
      />
      <input
        id="price"
        name="unformatted-price-123"
        className="w-full px-4 py-2 border rounded"
        placeholder="Price"
        type="number"
      />        
      </div>

      <BRQSmartPopup
        api="https://dummyjson.com/products"
        dataKey="products"
        displayFields={["title", "description", "category", "price"]}
        bindFields={{
          title: "title",
          description: "description",
          category: "category",
          price: "price"
        }}
      />
    </div>
  )
}

export default UnFormatted
