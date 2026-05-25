import { useEffect, useRef, useState } from 'react';
import { ActivityShell } from '../layout/ActivityShell';
import { useSpeech } from '../../hooks/useSpeech';
import type { ActivityConfig } from '../../data/activities';
import styles from './DrawingCanvasActivity.module.css';

interface DrawingCanvasProps {
  config: ActivityConfig;
}

const COLORS = [
  { name: 'Red', value: '#FF3333' },
  { name: 'Orange', value: '#FF8C00' },
  { name: 'Yellow', value: '#FFD700' },
  { name: 'Green', value: '#22C55E' },
  { name: 'Blue', value: '#3B82F6' },
  { name: 'Purple', value: '#9333EA' },
  { name: 'Pink', value: '#EC4899' },
  { name: 'Brown', value: '#92400E' },
  { name: 'Black', value: '#1F2937' },
  { name: 'White', value: '#F0F0F0' },
];

const BRUSH_SIZES = [4, 10, 20, 36];

export function DrawingCanvasActivity({ config }: DrawingCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [color, setColor] = useState('#3B82F6');
  const [brushSize, setBrushSize] = useState(10);
  const { isEnabled, toggle } = useSpeech(config.voiceEnabled);
  const [isEraser, setIsEraser] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  const getPos = (e: React.MouseEvent | React.TouchEvent, canvas: HTMLCanvasElement) => {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    if ('touches' in e) {
      const touch = e.touches[0];
      return {
        x: (touch.clientX - rect.left) * scaleX,
        y: (touch.clientY - rect.top) * scaleY,
      };
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const startDraw = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    setIsDrawing(true);
    lastPos.current = getPos(e, canvas);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx || !lastPos.current) return;

    const pos = getPos(e, canvas);
    ctx.beginPath();
    ctx.moveTo(lastPos.current.x, lastPos.current.y);
    ctx.lineTo(pos.x, pos.y);
    ctx.strokeStyle = isEraser ? '#FFFFFF' : color;
    ctx.lineWidth = isEraser ? brushSize * 2 : brushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();

    lastPos.current = pos;
  };

  const endDraw = () => {
    setIsDrawing(false);
    lastPos.current = null;
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

  const saveCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = 'mishka-drawing.png';
    link.href = canvas.toDataURL();
    link.click();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  return (
    <ActivityShell
      title={config.title}
      icon={config.icon}
      showNavigation={false}
    
      voiceEnabled={isEnabled}
      onToggleVoice={toggle}>
      <div className={styles.container}>
        {/* Toolbar */}
        <div className={styles.toolbar}>
          {/* Color picker */}
          <div className={styles.toolSection}>
            <span className={styles.toolLabel}>Colors</span>
            <div className={styles.colorRow}>
              {COLORS.map((c) => (
                <button
                  key={c.value}
                  className={`${styles.colorBtn} ${color === c.value && !isEraser ? styles.activeColor : ''}`}
                  style={{ background: c.value, borderColor: c.value === '#F0F0F0' ? '#ddd' : c.value }}
                  onClick={() => { setColor(c.value); setIsEraser(false); }}
                  aria-label={c.name}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          {/* Brush size */}
          <div className={styles.toolSection}>
            <span className={styles.toolLabel}>Size</span>
            <div className={styles.sizeRow}>
              {BRUSH_SIZES.map((size) => (
                <button
                  key={size}
                  className={`${styles.sizeBtn} ${brushSize === size ? styles.activeSize : ''}`}
                  onClick={() => setBrushSize(size)}
                  aria-label={`Brush size ${size}`}
                >
                  <span style={{ width: size / 1.5, height: size / 1.5, background: isEraser ? '#ddd' : color, borderRadius: '50%', display: 'block' }} />
                </button>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className={styles.toolSection}>
            <span className={styles.toolLabel}>Tools</span>
            <div className={styles.toolRow}>
              <button
                className={`${styles.toolBtn} ${isEraser ? styles.activeTool : ''}`}
                onClick={() => setIsEraser(!isEraser)}
                aria-label="Eraser"
                aria-pressed={isEraser}
              >
                🧹 Erase
              </button>
              <button className={styles.toolBtn} onClick={clearCanvas} aria-label="Clear canvas">
                🗑️ Clear
              </button>
              <button className={styles.toolBtn} onClick={saveCanvas} aria-label="Save drawing">
                💾 Save
              </button>
            </div>
          </div>
        </div>

        {/* Canvas */}
        <div className={styles.canvasWrapper}>
          <canvas
            ref={canvasRef}
            className={styles.canvas}
            width={900}
            height={600}
            onMouseDown={startDraw}
            onMouseMove={draw}
            onMouseUp={endDraw}
            onMouseLeave={endDraw}
            onTouchStart={startDraw}
            onTouchMove={draw}
            onTouchEnd={endDraw}
            style={{ cursor: isEraser ? 'cell' : 'crosshair' }}
            aria-label="Drawing canvas"
            role="img"
          />
        </div>
      </div>
    </ActivityShell>
  );
}
