
import Lightbulb from './LightbulbSVG/LightbulbSVG.js';
import Computer from './ComputerSVG/ComputerSVG.js';
import Design from './DesignSVG/DesignSVG.js';
import Spedometer from './SpedometerSVG/SpedometerSVG.js';
import FullStack from './FullStackSVG/FullStackSVG.js';
import FrontEnd from './FrontEndSVG/FrontEndSVG.js';
import BackEnd from './BackEndSVG/BackEndSVG.js';
import Language from './LanguageSVG/LanguageSVG.js';
import Database from './DatabaseSVG/DatabaseSVG.js';
import Tool from './ToolSVG/ToolSVG.js';


const svgMapping = {
  'Computer': Computer,
  'Spedometer': Spedometer,
  'Design': Design,
  'Lightbulb': Lightbulb,
  'FullStack': FullStack,
  'FrontEnd' : FrontEnd,
  'BackEnd': BackEnd,
  'Language': Language,
  'Database': Database,
  'Tool': Tool
};

export default svgMapping;