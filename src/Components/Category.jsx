import React, { useEffect, useState } from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import { addCategoryApi, deleteCategoryApi, getAVideoApi, getCategoryApi, updateCategoryApi } from '../Services/allApi';
import VidioCard from './VidioCard';




function Category({dropVideoResponses}) {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //state to hold the value in the input
  const [categoryName, setCategoryName] = useState("")

  //state to get the allCategorys in the array

  const [allCategories, setAllCategories] = useState([])




  //add category

  const handleAdd = async () => {
    if (categoryName) {
      const result = await addCategoryApi({ categoryName, allVideos: [] })
      // console.log(result);
      if (result.status >= 200 && result.status <= 300) {
        handleClose()
        getCategories()
        setCategoryName("")
      } else {
        console.log(result.message);

      }

    } else {
      alert("please fill the missing fields")
    }
  }

  const getCategories = async () => {

    const { data } = await getCategoryApi()
    setAllCategories(data)
  }


  //remove category

  const removeCategory = async (id) => {
    await deleteCategoryApi(id)
    getCategories()
  }

  // console.log(allCategories);



  const dragOver = (e) => {
    console.log("video drag over the category");
    e.preventDefault()


  }

  const videoDrop = async (e, categoryId) => {
    const videoId = e.dataTransfer.getData("video")
    console.log(videoId, "dropped into category id:", categoryId);

    //to get a single video we created an api call the api
    const { data } = await getAVideoApi(videoId)
    //  console.log(data);

    const selectedCategory = allCategories.find(item => item.id == categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);

    await updateCategoryApi(categoryId, selectedCategory)
    getCategories()


  }

  const videoDragStarted = (e,videoId,categoryId)=>{
    let dataShare = {videoId,categoryId}
    e.dataTransfer.setData("data",JSON.stringify(dataShare))

  }





  useEffect(() => {
    getCategories()

  }, [dropVideoResponses])


  return (
    <>
      <div className="d-grid">
        <button style={{width:'320px'}} onClick={handleShow} className='btn btn-primary fw-bolder'>Add Category</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <FloatingLabel controlId="floatingInput2" label="Enter your Category" className="mb-3 rounded shadow">
              <Form.Control
                type="text"
                placeholder="Category Name"
                onChange={e => setCategoryName(e.target.value)}
              />
            </FloatingLabel>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger rounded " onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary rounded" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>


      {
        allCategories?.length > 0 ? allCategories.map(category => (
          <div style={{width:'320px'}} className="mt-3 p-3 border border-3 border-primary rounded shadow" droppable="true" onDragOver={e => dragOver(e)} onDrop={e => videoDrop(e, category?.id)}>
            <div className="d-flex justify-content-between align-items-center">
              <h5 className='text-primary fw-bolder' >{category?.categoryName}</h5>
              <Button onClick={() => removeCategory(category?.id)} className='text-danger btn' variant=''><i class="fa-solid fa-trash fs-5"></i></Button>
            </div>

            <Row>
              {
                category?.allVideos.length > 0 ? category?.allVideos.map(card => (
                  <Col sm={12} className='mb-3 mt-3  me-5' draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
                    <VidioCard video={card} insideCategory={true} />
                  </Col>

                )) : null
              }
            </Row>

          </div>

        )) : <p className='text-danger'>No Categories Created</p>
      }


    </>
  )
}

export default Category
