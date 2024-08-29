'use client'
import React, { useState, useEffect, lazy } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SearchBar from './searchbar';
import Filter_Result from './filter_result';
import Category_Selector from './category_selector';
// import Card from './card';
import Filter from './filter';
import '../../../public/sass/pages/course.scss';
import Chips from './chips';
import { Suspense } from 'react';
import Loader from './loader';
import axios from 'axios';
const Card = lazy(() => import('./card'))

const Course = () => {
    const [filterShow, setFilterShow] = useState(false)
    const [chips, setChips] = useState([])
    const [productData, setProductData] = useState([])


    const addChip = (e) => {
        let value = e.target.value;
        if (chips.length >= 0) {
            if (!chips.includes(value)) {
                setChips([...chips, value])
            }
        }
    }
    const removeChip = (index) => {
        if (!chips.includes(index)) {
            chips.splice(index, 1)
            setChips([...chips])
        }
    }
    // useEffect(() => {
    //     fetch('https://dummyjson.com/products')
    //         .then((res) => {
    //             return res.json()
    //         }).then((data) => {
    //             setProductData(data.products)
    //         }).catch((err) => console.log(err))

    // }, [])

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch('https://dummyjson.com/products');
    //         const data = await res.json();
    //         setProductData(data.products)
    //     }
    //     fetchData()
    // }, [])

    // useEffect(()=>{
    //     axios.get('https://dummyjson.com/products')
    //     .then((res) =>{
    //         setProductData(res.data.products)
    //     })
    //     .catch(err => console.log(err))
    // },[])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://dummyjson.com/products/?limit=9`);
                if (res.status === 200) {
                    console.log(res.data)
                    let data = res.data.products
                    setProductData(data)
                }
                // console.log(productData)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    return (
        <section className="course">
            <Container>
                <Row>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                        <div className="parent_course">
                            <SearchBar show={filterShow} setFilterShow={setFilterShow} />
                            <Filter_Result />
                            <Chips chips={chips} setChips={setChips} removeChip={(index) => removeChip(index)} />
                            <Category_Selector />
                            <div className="main_card_parent">
                                <Suspense fallback={<Loader />}>
                                    {
                                        productData.map((product, index) => {
                                            // console.log(product.title)
                                            return <Card key={index} title={product.title} desc={product.description} images={product.images} />
                                        })

                                    }
                                </Suspense>
                            </div>
                            <Filter show={filterShow} setFilterShow={setFilterShow} addChip={(e) => addChip(e)} chips={chips} setChips={setChips}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Course