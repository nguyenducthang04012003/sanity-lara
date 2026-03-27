'use client'

import {useState} from 'react'
import Image from 'next/image'
import '../../styles/visualizer.css'

type Visualizer = {
  _id: string
  title: string
  colorName: string
  size: string
  baseImage: string
  colorImage: string
}

export default function VisualizerClient({data}: {data: Visualizer[]}) {
  const [selectedColor, setSelectedColor] = useState<Visualizer | null>(data?.[0] || null)
  const [loading, setLoading] = useState(false)

  const currentImage = selectedColor?.colorImage || data?.[0]?.colorImage

  return (
    <div className="visualizer-container">
      {/* ẢNH CHÍNH */}
      <div className="visualizer-content">
        {loading && <div className="loading-overlay">Đang tải...</div>}
        <Image
          src={currentImage}
          alt="Visualizer"
          fill
          style={{objectFit: 'contain'}}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>

      <div className="color-section">
        {/* INFO */}
        {selectedColor && (
          <div className="color-detail">
            <h3 className="color-title">{selectedColor.title}</h3>

            <p>
              <b>Màu sắc:</b> {selectedColor.colorName}
            </p>

            <p>
              <b>Kích thước:</b> {selectedColor.size}
            </p>
          </div>
        )}

        {/* LIST */}
        <div className="color-list">
          {data.map((color) => (
            <div
              key={color._id}
              className={`color-item ${selectedColor?._id === color._id ? 'active' : ''}`}
              onClick={() => {
                setSelectedColor(color)
                setLoading(true)
              }}
            >
              <Image
                src={color.baseImage}
                alt={color.colorName}
                width={80}
                height={80}
                style={{height: 70, width: '100%'}}
              />
              <p>{color.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
