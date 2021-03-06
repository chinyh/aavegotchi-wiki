import React from 'react'
import App from 'next/app'
import Head from 'next/head'
import NextStyledNavBar from '../components/NextComponents/NextStyledNavBar'
import '../css/fonts.css'
import '../css/styles.css'


class MyApp extends App {



    render() {
        const { Component, pageProps } = this.props




        return (

            <div>

                <NextStyledNavBar />

                <Head>
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossOrigin="anonymous"
                    />
                </Head>






                <Component {...pageProps} />

            </div>


        )
    }
}

export default MyApp