'use client'
import {useState} from 'react'

export default function KitchenMultiPartDemo() {
  // Màu từng phần
  const [cabinetColor, setCabinetColor] = useState('#ffffff')
  const [wallColor, setWallColor] = useState('#cccccc')

  // Bảng màu
  const colors = [
    {name: 'Trắng', hex: '#ffffff'},
    {name: 'Đen', hex: '#000000'},
    {name: 'Đỏ', hex: '#ff0000'},
    {name: 'Xanh', hex: '#00ff00'},
    {name: 'Vàng', hex: '#ffff00'},
  ]

  return (
    <div style={{padding: 20}}>
      <h1>Kitchen Multi-Part Demo</h1>

      {/* IMAGE MOCKUP */}
      <div
        style={{
          position: 'relative',
          width: 600,
          height: 400,
          border: '2px solid #ccc',
          borderRadius: 10,
          backgroundColor: '#eee',
        }}
      >
        {/* Tấm ốp tường */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: 100,
            backgroundColor: wallColor,
            opacity: 0.8,
          }}
        />

        {/* Cánh tủ */}
        <div
          style={{
            position: 'absolute',
            top: 100,
            left: 50,
            width: 500,
            height: 250,
            backgroundColor: cabinetColor,
            borderRadius: 4,
            opacity: 0.9,
          }}
        />
      </div>

      {/* COLOR PICKER CABINET */}
      <div style={{marginTop: 20}}>
        <h3>Cabinet Color</h3>
        <div style={{display: 'flex', gap: 10}}>
          {colors.map((c) => (
            <button
              key={c.hex}
              onClick={() => setCabinetColor(c.hex)}
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: c.hex,
                border: cabinetColor === c.hex ? '3px solid black' : '2px solid #ccc',
                cursor: 'pointer',
              }}
              title={c.name}
            />
          ))}
        </div>
      </div>

      {/* COLOR PICKER WALL */}
      <div style={{marginTop: 20}}>
        <h3>Wall Color</h3>
        <div style={{display: 'flex', gap: 10}}>
          {colors.map((c) => (
            <button
              key={c.hex}
              onClick={() => setWallColor(c.hex)}
              style={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: c.hex,
                border: wallColor === c.hex ? '3px solid black' : '2px solid #ccc',
                cursor: 'pointer',
              }}
              title={c.name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
