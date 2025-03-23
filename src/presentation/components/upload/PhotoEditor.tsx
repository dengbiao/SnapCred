import React, { useState, useRef, useEffect } from "react";
import Button from "@presentation/components/ui/Button";
import { CredentialType } from "@domain/models/CredentialType";
import "@styles/components/upload/PhotoEditor.scss";

interface PhotoEditorProps {
  photoUrl: string;
  credentialType: CredentialType;
  onBack: () => void;
  onComplete: (editedPhotoUrl: string) => void;
}

const PhotoEditor: React.FC<PhotoEditorProps> = ({
  photoUrl,
  credentialType,
  onBack,
  onComplete,
}) => {
  const [rotation, setRotation] = useState(0);
  const [brightness, setBrightness] = useState(100);
  const [backgroundRemoved, setBackgroundRemoved] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  // 加载图片并初始化画布
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      imageRef.current = img;
      drawImage();
    };
    img.src = photoUrl;
  }, [photoUrl]);

  // 在参数变化时重绘图像
  useEffect(() => {
    drawImage();
  }, [rotation, brightness, backgroundRemoved]);

  // 绘制图像到画布
  const drawImage = () => {
    const canvas = canvasRef.current;
    const img = imageRef.current;

    if (!canvas || !img) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 设置画布尺寸
    const maxWidth = 400;
    const maxHeight = 500;
    let width = img.width;
    let height = img.height;

    // 调整尺寸以适应画布
    if (width > height) {
      if (width > maxWidth) {
        height = Math.round((height * maxWidth) / width);
        width = maxWidth;
      }
    } else {
      if (height > maxHeight) {
        width = Math.round((width * maxHeight) / height);
        height = maxHeight;
      }
    }

    canvas.width = width;
    canvas.height = height;

    // 清除画布
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 如果需要去除背景，绘制白色背景
    if (backgroundRemoved) {
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // 应用旋转
    if (rotation !== 0) {
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((rotation * Math.PI) / 180);
      ctx.drawImage(img, -width / 2, -height / 2, width, height);
      ctx.restore();
    } else {
      ctx.drawImage(img, 0, 0, width, height);
    }

    // 应用亮度调整
    if (brightness !== 100) {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const factor = brightness / 100;

      for (let i = 0; i < data.length; i += 4) {
        data[i] = Math.min(255, Math.max(0, data[i] * factor));
        data[i + 1] = Math.min(255, Math.max(0, data[i + 1] * factor));
        data[i + 2] = Math.min(255, Math.max(0, data[i + 2] * factor));
      }

      ctx.putImageData(imageData, 0, 0);
    }
  };

  // 旋转照片
  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  // 调整亮度
  const handleBrightnessChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBrightness(Number(e.target.value));
  };

  // 切换背景移除
  const handleBackgroundToggle = () => {
    setBackgroundRemoved((prev) => !prev);
  };

  // 完成编辑，保存图像
  const handleComplete = () => {
    if (canvasRef.current) {
      const editedUrl = canvasRef.current.toDataURL("image/jpeg");
      onComplete(editedUrl);
    }
  };

  return (
    <div className="photo-editor">
      <h2 className="photo-editor__title">编辑您的照片</h2>

      <div className="photo-editor__content">
        <div className="photo-editor__preview-container">
          <canvas ref={canvasRef} className="photo-editor__canvas" />
          <div className="photo-editor__info">
            <h3>{credentialType.name.zh}</h3>
            <p>
              {credentialType.dimensions.width} ×{" "}
              {credentialType.dimensions.height} mm
            </p>
            <p>{credentialType.description.zh}</p>
          </div>
        </div>

        <div className="photo-editor__tools-container">
          <h3 className="photo-editor__tools-title">照片调整</h3>

          <div className="photo-editor__tools">
            <div className="photo-editor__tool">
              <h4>调整背景</h4>
              <Button onClick={handleBackgroundToggle}>
                {backgroundRemoved ? "恢复原始背景" : "设置白色背景"}
              </Button>
            </div>

            <div className="photo-editor__tool">
              <h4>旋转照片</h4>
              <Button onClick={handleRotate}>旋转90°</Button>
              <span className="photo-editor__tool-value">{rotation}°</span>
            </div>

            <div className="photo-editor__tool">
              <h4>亮度调整</h4>
              <input
                type="range"
                min="50"
                max="150"
                value={brightness}
                onChange={handleBrightnessChange}
                className="photo-editor__slider"
              />
              <span className="photo-editor__tool-value">{brightness}%</span>
            </div>
          </div>

          <div className="photo-editor__actions">
            <Button onClick={onBack} variant="secondary">
              返回
            </Button>
            <Button onClick={handleComplete} variant="primary">
              完成
            </Button>
          </div>
        </div>
      </div>

      {/* 隐藏的图片预览，用于测试 */}
      <img src={photoUrl} alt="照片预览" style={{ display: "none" }} />
    </div>
  );
};

export default PhotoEditor;
