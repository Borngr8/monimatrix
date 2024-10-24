import React from 'react'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer';

const title = "MONIMATRIX - CopyTrade to profits";

const description = "Top Forex Copytrade Service For Profitable Signals"

export const metadata = {
    metadataBase: new URL(process.env.SITE_URL),
    title: title,
    description: description,
    alternates: {
        canonical: '/'
    },
    openGraph: {
        title: title,
        description: description,
        url: '/',
        siteName: process.env.APP_NAME,
        images: {
            url: '/assets/og-img.png',
            width: 1200,
            height: 630,
            alt: title
        },
        locale: 'en_US',
        type: 'website'
    },
    twitter: {
        card: 'summary_large_image',
        site: process.env.TWITTER,
        creator: process.env.TWITTER
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

const layout = ({ children }) => {
    return (
        <React.Fragment>
            <html>
                <body>
                    <Header />
                    {children}
                    <Footer />
                </body>
            </html>
        </React.Fragment>
    )
}

export default layout