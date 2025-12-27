
import image1 from "./maths-realistic-chalkboard-background_23-2148159115.avif"
import image2 from "./New-Project-2-3.webp"
import image3 from "./images3.png"
import image4 from "./images4.jpg"
import image5 from "./images5.jpg"
import image6 from "./images6.0.jpg"
import image7 from "./imges7.png"
import imgae8 from "./PROJE1.webp"
import image9 from "./project2.png"
import image10 from "./python.jpg"
import data from "./data.png"
import aem from "./yourself-2.png"
import amepdf from "./AME-Topic.pdf"
import m1unit1 from "./m1-uni1-01.pdf"
import m1unit2 from "./m1-unit2.pdf"
import m1unit3 from "./m1unit3.pdf"
import m1unit4 from "./m1unit4.pdf"
import m1unit5 from "./m1unit5.pdf"
import m1unit6 from "./m1unit6.pdf"
import m2unit1 from "./m2unit1.pdf"
import m2unit2 from "./m2unit2.pdf"
import m2unit3 from "./m2unit3.pdf"
import m2unit4 from "./m2unit4.pdf"
import m2unit5 from "./m2unit5.pdf"
import m2unit6 from "./m2unit6.pdf"
export default {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  imgae8,
  image9,
  image10,
  data,
  aem, amepdf,
  m1unit1,
  m1unit2,
  m1unit3,
  m1unit4,
  m1unit5,
  m1unit6,
  m2unit1,
  m2unit2,
  m2unit3,
  m2unit4,
  m2unit5,
  m2unit6


}

// Utility function to extract YouTube video ID from URL
export const extractYouTubeVideoId = (url) => {
  if (!url) return null;

  // Handle YouTube playlist URLs
  const playlistMatch = url.match(/[?&]list=([a-zA-Z0-9_-]+)/);
  if (playlistMatch) {
    return { type: 'playlist', id: playlistMatch[1] };
  }

  // Handle different YouTube video URL formats
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^#&?]*)/,
    /youtube\.com\/v\/([^#&?]*)/,
    /youtube\.com\/watch\?.*v=([^#&?]*)/
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1] && match[1].length === 11) {
      return { type: 'video', id: match[1] };
    }
  }

  return null;
};

export const lectureData = [
  {
    ModuleName: "module1",
    subjects: [
      {
        id: 1,
        name: "Math-1",
        text: "LINEAR ALGEBRA AND DIFFERENTIAL EQUATIONS",
        image: image1,
      },
      {
        id: 2,
        name: "COOA",
        text: "COMPUTER ORGANIZATION AND ARCHITECTURE",
        image: image2, // Replace with real image
      },
      {
        id: 3,
        name: "C",
        text: "PROBLEM SOLVING & PROGRAMMING",
        image: image3,
      },
      {
        id: 4,
        name: "Web Development",
        text: "Web Development",
        image: image4,
      },
      {
        id: 5,
        name: "ASEP-1",
        text: "APPLIED SCIENCE & ENGINEERING PROJECT-1",
        image: imgae8,
      },
      {
        id: 7,
        name: "RAAD-1",
        text: "REASONING & APTITUDE DEVELOPMENT - 1",
        image: image7,
      },
    ],
  },
  {
    ModuleName: "module2",
    subjects: [
      {
        id: 1,
        name: "Math-2",
        text: "CALCULUS AND STATISTICS",
        image: image1,
      },
      {
        id: 2,
        name: "PYTHON",
        text: "PYTHON FOR ENGINEERS",
        image: image10, // Replace with real image
      },
      {
        id: 3,
        name: "DATA ANALYSIS",
        text: "DATA ANALYSIS",
        image: data,
      },
      {
        id: 4,
        name: "AEM",
        text: "APPLIED ELECTROMECHANICS",
        image: aem
        ,
      },
      {
        id: 5,
        name: "ASEP-2",
        text: "APPLIED SCIENCE & ENGINEERING PROJECT-2",
        image: image9
        ,
      },
      {
        id: 7,
        name: "RAAD-2",
        text: "REASONING & APTITUDE DEVELOPMENT - 2",
        image: image7,
      },
    ],
  },
];


export const dummyLectureData = [
  {
    subject: 'MATH-1',
    units: [
      {
        unit: 'Unit 01: SYSTEM OF LINEAR EQUATIONS',
        notesLink: m1unit1,
        subtopics: [
          {
            title: 'Revision of matrices, Elementary transformations, Elementary Matrices',
            videoLink: 'https://youtu.be/zAsSkYhDxGM?si=lsZ9ogQ9UaRIdqD5',
            
          },
          {
            title: 'Rank of matrix: Echelon form, Pivot position, Pivot columns, non-pivot columns',
            videoLink: 'https://youtu.be/qBBhTkIdToY?si=vXpKy-dqhnJhNkZm',
           
          },
          {
            title: 'Non-Homogeneous System of linear equation and its solution and problem solving',
            videoLink: 'https://youtu.be/B4h6OkQ0ZJ8?si=w0qVfgq2YTadfiC2',
           
          },
          {
            title: 'Homogeneous System of linear equation and its solution and problem solving',
            videoLink: 'https://youtu.be/gXveJraU7hc?si=jKrascQPQtW82O7q',
           
          },
          {
            title: 'Gauss-Jordan Elimination Problem solving on all cases',
            videoLink: 'https://youtu.be/iggxjHSQiOI?si=A2BYXzBnYRjHQx1D ',
           
          },
        ],
      },
      {
        unit: 'Unit 02: VECTOR SPACES',
        notesLink: m1unit4,
        subtopics: [
          {
            title: 'Introduction, Definition of Vector Space , Standard Vector Spaces Definition of Subspace ',
            videoLink: 'https://youtu.be/yzuoyA2EJPA?si=0goW3g_RPFVHeOZ_',
            notesLink: 'https://example.com/notes/first-order-des.pdf',
          },
          {
            title: 'Examples on Subspace',
            videoLink: 'https://youtu.be/5LCO26C-ggo?si=GeHPJUnNrJGBBTSA',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Linear combination, Span of a set,Spanning set',
            videoLink: 'https://youtu.be/iF7ya80h1Rs?si=6sCuits_87VqrWEA',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Linear Dependence and Independence of vectors ',
            videoLink: 'https://youtu.be/9WjuLvPT_2A?si=uYUTTqS7FGuagNiX',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Basis & Dimension of a subspace  ',
            videoLink: 'https://youtu.be/pG-IAFOiOw4?si=yzSeoIy63wPaw6Qp',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Fundamental Subspaces',
            videoLink: 'https://youtu.be/URa07AbjZhQ?si=oySt8GFqezicKKFq ',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
        ],
      },
      {
        unit: 'Unit 03:INNER PRODUCT SPACES',
        notesLink: m1unit4,
        subtopics: [
          {
            title: 'Inner Product- Definition and Examples, Inner product spaces',
            videoLink: 'https://youtu.be/8M0moiQLanE?si=nWMpnbNPBDln6Hbc',
            notesLink: 'https://example.com/notes/first-order-des.pdf',
          },
          {
            title: 'Norm,Distance, Angle, Projection',
            videoLink: 'https://youtu.be/fpB1GvteuMY?si=xc8UixvbCqdQN04Q',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Orthogonal and Orthonormal vectors, Orthogonal and Orthonormal Set,complete',
            videoLink: 'https://youtu.be/K1vWFx01I2A?si=vQQkU4dfriZSWaXZ',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Gram-Schmidt process of orthogonalization',
            videoLink: 'https://youtu.be/UOZjINOGLog?si=M4HuseuWf-jMwEn1',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Orthogonality of Fundamental Subspaces.',
            videoLink: 'https://youtu.be/x6enM9dtOH8?si=ALNXHcO7rQnrB-b5',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Applications to least square fitting to data',
            videoLink: 'https://youtu.be/qGqfYrMpewY?si=OPyrlGQhdwdhxiQP ',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
        ],
      },
      {
        unit: 'Unit 04:LINEAR TRANSFORMATION',
        notesLink: m1unit5,
        subtopics: [
          {
            title: 'Introduction to linear transformations, Matrix representation relative to Standard Basis',
            videoLink: 'https://www.youtube.com/watch?v=cfhw2TC4k0Y',
            notesLink: 'https://example.com/notes/first-order-des.pdf',
          },
          {
            title: 'Kernel, Range of linear transformations',
            videoLink: 'https://youtu.be/ImoKUiapTsQ?si=0fT_hkbHet4Qhg7A',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'One-One-Onto linear transformations',
            videoLink: 'https://youtu.be/oM_BWfZFJOo?si=NVZBrt-u_0H3N8aj',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Rank and Nullity Theorem',
            videoLink: 'https://youtu.be/Kpp2hM4V3x0?si=TFxGjwcdgR-97LnD',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Regular Transformation, Composite linear transformation, Orthogonal Transformation',
            videoLink: 'https://www.youtube.com/watch?v=XYi2-LPrwm4',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Geometric Linear transformations in R2 and R3 ',
            videoLink: 'https://youtu.be/tlyFZCcATrQ?si=TBrUhAuLZwEew4fz',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
        ],
      },
      {
        unit: 'Unit 05: EIGEN VALUES AND EIGEN VECTORS',
        notesLink: m1unit5,
        subtopics: [
          {
            title: 'Eigen Values and Eigen Vectors of a matrix, Characteristic Equation,Properties',
            videoLink: 'https://youtu.be/h8sg_XBp6VA?si=MmZ284YNw-0sV-e2',
            notesLink: 'https://example.com/notes/first-order-des.pdf',
          },
          {
            title: 'Examples on Eigen Values and Eigen Vectors',
            videoLink: 'https://youtu.be/R6X6UhXvkbE?si=OO6strxAF7e2EHMm',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Algebraic multiplicity, Eigen Space, Geometric multiplicity',
            videoLink: 'https://youtu.be/jHQUreSbcaU?si=QYoJfYQc6EB4F2jM',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Diagonalization of a matrix',
            videoLink: 'https://youtu.be/IKdqDI_oxxI?si=OanZyQLsNiVwELlV',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Introduction to Quadratic Form',
            videoLink: 'https://youtu.be/tM3TQRRybO0?si=ERjpkq_8hGqQzb5N',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Principal Axes Theorem',
            videoLink: 'https://youtu.be/gii12FE-A44?si=q20xSWzjch34eCrI',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
        ],
      },
      {
        unit: 'Unit 06: LINEAR DIFFERENTIAL EQUATIONS',
        notesLink: m1unit6,
        subtopics: [
          {
            title: 'Exact differential equation, First order linear ODE',
            videoLink: 'https://www.youtube.com/watch?v=cfhw2TC4k0Y',
            notesLink: 'https://example.com/notes/first-order-des.pdf',
          },
          {
            title: 'Higher order Linear ODES',
            videoLink: 'https://www.youtube.com/watch?v=XYi2-LPrwm4',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Homogeneous ODE',
            videoLink: 'https://www.youtube.com/watch?v=XYi2-LPrwm4',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Non homogeneous ODE',
            videoLink: 'https://www.youtube.com/watch?v=XYi2-LPrwm4',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Application of diagonalization (Solution of DE by matrix method)',
            videoLink: 'https://www.youtube.com/watch?v=XYi2-LPrwm4',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
        ],
      },
    ],
  },
  {
    subject: 'MATH-2',
    units: [
      {
        unit: 'Unit 01: FUNCTIONS OF SINGLE VARIABLE ',
        notesLink: m2unit2,
        subtopics: [
          {
            title: 'Single-variable functions, sequences, definitions, examples, and convergence/divergence concepts',
            videoLink: 'https://youtu.be/B95FlnkCV1w?si=-pxiyUfGRVy7arK3',
          },
          {
            title: 'Infinite Series introduction, Sequence of Partial Sum, Convergence and Divergence of Seriee, divergence test',
            videoLink: 'https://youtu.be/XC-M-oTVR_0?si=NcTSZVDzZYL5jjaX',
           
          },
          {
            title: 'Comparison test Direct and limnit comparison',
            videoLink: 'https://youtu.be/oZtAgihok5s?si=G3ecL-7oDM9Dp4tS',
           
          },
          {
            title: 'Ratio Test, Power Seriee, Region of Convergence',
            videoLink: 'https://youtu.be/wOURocjlq14?si=VIhMQAkiXdLNBLP8',
           
          },
          {
            title: 'Taylor s Series, introduction to Maclauring Series',
            videoLink: 'https://youtu.be/a58otkmkHtk?si=PPXTl60tM4U8fSnu',
           
          },
          {
            title: 'Standerde expansions using Maclaurin serien',
            videoLink: 'https://youtu.be/zaPMAgSXAuc?si=gyeXsQVFHj674ltd ',
           
          },
        ],
      },
      {
        unit: 'Unit 02: FUNCTIONS OF SEVERAL VARIABLES ',
        notesLink: m2unit1,
        subtopics: [
          {
            title: 'Introduction to Multivariate functions and Partial Derivatives',
            videoLink: 'https://youtu.be/eTp5wq-cSXY?si=m8DLrNWiN0RtZv_-',
           
          },
          {
            title: 'Problems on evaluation of partial derivatives',
            videoLink: 'https://youtube.com/playlist?list=PLDaH-PoUT6Thy1bpqeI9J3QxFJLHdZQbO&si=uxDTHnkX_Y_AR9df',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Differentiation of Composite functione, chain rule',
            videoLink: 'https://youtu.be/Zur0JV_QqYk?si=gVgjtI6zL6dRO7xG',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Implicit functions, Total Derivative ',
            videoLink: 'https://youtu.be/9GKfvknvTQk?si=39RkvN2Mj3WpKFQU',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: ' Ewler theorm for homogeneous functions',
            videoLink: 'https://youtu.be/palSdK9P-ns?si=1ajjo6VmdUDnDS-v',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: ' Maxima and Minima of funciton of two variables ',
            videoLink: 'https://youtu.be/In3oZPIymm8?si=KfL4XKM81viJ7v0s',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Lagrange method of udetermired multipliers',
            videoLink: 'https://youtu.be/etLoYBJMCX8?si=0zeN2VBjCrxr5EeB',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: ' Jacobian of funciton of two variables',
            videoLink: 'https://youtu.be/YXmeH1yevkk?si=3nqm80K5rqY4YHdf',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Errors and approximations',
            videoLink: 'https://youtu.be/YXmeH1yevkk?si=3nqm80K5rqY4YHdf',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
        ],
      },
      {
        unit: 'Unit 03:VECTOR DIFFERENTIATION',
        notesLink: m2unit3,
        subtopics: [
          {
            title: 'Intro to single-variable functions and sequences with definitions, examples, and conver/diver discussion.',
            videoLink: 'https://youtu.be/FfJtVvQtqTM?si=28zcLoDqqiVxUliD',
           
          },
          {
            title: 'Introduction to Vector Differential Operator Del, Geometrical Interpretation and problems',
            videoLink: 'https://youtu.be/52sLsNvoW_c?si=YBpSL5y05V9FEP8a',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Action of De on Segler point and Vector point functions',
            videoLink: 'https://youtu.be/2uPUUwQxPtA?si=W533RrS7IUfISdrg',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Gradient of scalar Point function and  physical interpretation',
            videoLink: 'https://youtu.be/ajBcee-OwzI?si=uE00jG26507Wx8UL',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Directional Derivative and its physical interpretation',
            videoLink: 'https://youtu.be/NAJuuEKwOIQ?si=EhDGQNdq5gk0bbrm ',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
        ],
      },
      {
        unit: 'Unit 04:MULTIPLE INTEGRALS AND APPLICATIONS',
        notesLink: m2unit4,
        subtopics: [
          {
            title: 'Definition of double integral, order of integration with examples',
            videoLink: 'https://youtu.be/swF628VHQDo?si=foiMSZ_VLz4cQANh',
           
          },
          {
            title: 'Evaluation in Carteian and poler coordinates',
            videoLink: 'https://youtu.be/AAdah81MB50?si=Mch49R5NGBVjHwLu',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: ' Change of order of integrstion',
            videoLink: 'https://youtu.be/IvXED51OTDc?si=DVhk07cwLd3lWd9_',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: ' Area by double integration',
            videoLink: 'https://youtu.be/FVZhdEPldIk?si=DdY7cyzjZuHqKPut',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: ' Evaluntion of Triple integration ',
            videoLink: 'https://youtu.be/re6hf7m2hP4?si=LJW53Jwg7WZ9zO3z',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Evaluation by cylindrical Coordinates',
            videoLink: 'https://youtu.be/FAihln6nIHw?si=hmRUr_IWYX13zGBC',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: ' Evaluation by spherical polar coordinates ',
            videoLink: 'https://youtu.be/S37r1pedR0M?si=lS4rrbtUUXgWaJNl',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: ' Volume by triple integration ',
            videoLink: 'https://youtu.be/S0jCEn1UMCc?si=HcWlxPSR6F7dK7c1',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
        ],
      },
      {
        unit: 'Unit 05: DESCRIPTIVE STATISTICS  ',
        notesLink: m2unit5,
        subtopics: [
          {
            title: 'Population , Sample, Statistical Variables, qualitative and quantitative variables, Types of variables',
            videoLink: 'https://youtu.be/h8sg_XBp6VA?si=MmZ284YNw-0sV-e2',
           
          },
          {
            title: 'https://youtu.be/FqB5Es1HXI4?si=xinal9G-Dd1sTBsX',
            videoLink: 'https://youtu.be/0XsAiSLnODw?si=OKRZerIXND1wtu-A',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Measures of central tendency and dispersion',
            videoLink: 'https://youtu.be/X48cZ6DGaSw?si=Fz7nNPjsB2xeyU2v',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Coefficient of variation. Skewness, Kurtosis',
            videoLink: 'https://youtu.be/m9a6rg0tNSM?si=pLTO7aF2i5lvwxpT',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: ' Quartiles, Decile, Percentiles',
            videoLink: 'https://youtu.be/ACuG1CR-wwE?si=C6XaygagucBmnux2',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Data visualization (Graphical Representation- Histogram, Box plot)',
            videoLink: 'https://youtu.be/2D5PswC7JBc?si=TrnkoX6j6KeKaIKW',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
        ],
      },
      {
        unit: 'Unit 06: RANDOM VARIABLES',
        notesLink: m2unit6,
        subtopics: [
          {
            title: 'Introduction Random veriables Domain, Range, Types of random variables ',
            videoLink: 'https://youtu.be/V3iEsLPAD68?si=_lY9Nz1diXO4vH3F',
           
          },
          {
            title: 'Probability mass function, Probability distribution function of discrete random variable',
            videoLink: 'https://youtu.be/7MJ3b_J_ZCE?si=l_5vZd9PS1e21Fs2',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Probability density function and Cumulative diatribution function of a continuous random variable',
            videoLink: 'https://youtu.be/l0ecMiNUZu8?si=fKc-YhlCGUPkz_8b',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Expectation variance and standard deviation of diecrete and continuous random variable',
            videoLink: 'https://youtu.be/H2Ji-Q4MfqU?si=fSRuCRJq6rWBXuwI',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: 'Bivariate Joint Probability distributions',
            videoLink: 'https://youtu.be/L0zWnBrjhng?si=m8qDNEpukndX-ShM',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: ' Covariance, Corelation Coefficient ',
            videoLink: 'https://youtu.be/sU8RsIsZ6Dg?si=PpKsdDcgyXKShwgk',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
          {
            title: ' Dependence, Independence of random  variables',
            videoLink: 'https://youtu.be/GZ0v2ahlzPE?si=NaURISxuIM3jfW_t ',
            notesLink: 'https://example.com/notes/homogeneous-eq.pdf',
          },
        ],
      },
    ],
  },
  {
    subject: 'COOA',
    units: [
      {
        unit: 'Unit 01: Basic Architecture concepts and Computer Arithmetic',
        subtopics: [
          {
            title: 'Laws of Motion',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: 'Work, Energy and Power',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
      {
        unit: 'Unit 01: Basic Architecture concepts and Computer Arithmetic',
        subtopics: [
          {
            title: 'Computer Organization and Architecture Structure and Function',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: 'Evolution (a brief history) of computers',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: '	Von Neumann Architecture',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: 'Evolution of Intel processor architecture 4 bits it to 64 bits',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: 'Interconnection Structures',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: '	Integer Representation Integer Arithmetic 2s Complement arithmetic',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Multiplication Booths Algorithm with hardware implementation',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: '	Division Restoring Algorithm with hardware implementation',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Floating point representation IEEE Standards for Floating point representations',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
      {
        unit: 'Unit 02:Processor Architectures',
        subtopics: [
          {
            title: 'RAM Model Instruction Execution Cycle Interpretation of instructions Instruction Pipeline',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: 'Processor Architectures RISC Features CISC Features Comparison of RISC and CISC',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Superscalar Processors and Super pipelined Processor',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
      {
        unit: 'Unit 03:Fundamental Concepts and processor organization',
        subtopics: [
          {
            title: 'Fundamental Concepts and processor organization',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: 'Single-bus CPU handles register transfers, memory fetch, and store. ',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Micro-operations carry out small steps in arithmetic, logic, and instruction execution',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Hardwired Control and Micro-programmed Control Microinstructions',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
      {
        unit: 'Unit 04:Input and Output System',
        subtopics: [
          {
            title: 'I/O system includes external devices, I/O modules, their functions, and structure.',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: '	Programmed I/O- overview I/O commands I/O instructions',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Interrupt driven I/O design issues Direct Memory Access',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Drawbacks of programmed&interrupt-driven I/O, DMA functions, I/O channels .',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
      {
        unit: 'Unit 05:Memory Organization',
        subtopics: [
          {
            title: 'Memory Organization, Need Memory Hierarchy and characteristics, Size, Access time',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: 'Read Cycle time and addresses space, Principle of Locality of Reference',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Main Memory RAM SRAM and DRAM ROM and its Types',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Cache memory: role, organization, address mapping; basics of virtual memory ',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
      {
        unit: 'Unit 06:Parallel Processing Paradigms',
        subtopics: [
          {
            title: 'Parallel Processing Paradigms, Parallelism in Uniprocessor system PRAM model',
            videoLink: 'https://www.youtube.com/watch?v=abcd1234',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
          {
            title: 'Evolution of parallel processors Architectural Classification Flynns Classification',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: 'Need and basics of Multicore architecture',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
          {
            title: ' Multicore Model Case Study CORE2DUO',
            videoLink: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
    ],
  },
  {
    subject: 'RAAD-1',
    units: [
      {
        unit: 'Test 1-1_ ASNS RAD 24-25-Sem1_RJ',
        subtopics: [
          {
            title: 'Analogy , Simplification , Number Series',
            videoLink: 'https://www.youtube.com/playlist?list=PL8p2I9GklV454LdGfDOw0KkNazKuA-6B2',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
        ],
      },
      {
        unit: 'Test 2-1_ AAD RAD 24-25-Sem1_RJC',
        subtopics: [
          {
            title: 'Ages , Average and Direction Sense',
            videoLink: 'https://www.youtube.com/playlist?list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },

        ],
      },
      {
        unit: 'Test 3-1_ RBRR RAD 24-25-Sem1_RJC',
        subtopics: [
          {
            title: 'Ratio and Proportion , Blood Relation , Ranking',
            videoLink: 'https://www.youtube.com/playlist?list=PL1zxEeUFe9lfDhh_Dewp5xHOnjLatGItQ',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },

        ],
      },
      {
        unit: 'Test 4-1_ PANS RAD 24-25-Sem1_RJC',
        subtopics: [
          {
            title: ' Percentage , Alphanumeric Series and Number System',
            videoLink: 'https://www.youtube.com/playlist?list=PLBlnK6fEyqRhMP7gwIe2j0hb1PCvYn0RI',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },

        ],
      },
      {
        unit: 'Test 5-1_ PLHR RAD 24-25-Sem1_RJC',
        subtopics: [
          {
            title: ' Ratio Partnership , LCM HCF.',
            videoLink: 'https://www.youtube.com/playlist?list=PLvTTv60o7qj_ZT2pXjgXxue0AlgkpH0ZO',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          }
        ],
      },
      {
        unit: 'Test 6-1_ SICI RAD 24-25-Sem1_RJC',
        subtopics: [
          {
            title: 'Simple Interest , Compound Interest , Calendar',
            videoLink: 'https://www.youtube.com/playlist?list=PLvTTv60o7qj_ZT2pXjgXxue0AlgkpH0ZO',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },

        ],
      },
      {
        unit: 'Test 7-1_ PL RAD 24-25-Sem1_RJC',
        subtopics: [
          {
            title: 'Profit Loss, Coding Decoding , Clock',
            videoLink: 'https://www.youtube.com/playlist?list=PLmJ0TJrONG1wiLFl4vq_SZmXmjwHY3xPP',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
        ],
      },
      {
        unit: 'Test 8-1_ PL RAD 24-25-Sem1_RJC',
        subtopics: [
          {
            title: 'Time Work , Pipes And Cistern , Seating Arrangemen',
            videoLink: 'https://www.youtube.com/playlist?list=PLzvL3i3l-AUora1MWnG_dje3RM-3pXWML',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
        ],
      },
      {
        unit: 'Test 9-1_ PL RAD 24-25-Sem1_RJC',
        subtopics: [
          {
            title: 'Mensuration , Probability',
            videoLink: 'https://www.youtube.com/playlist?list=PLYA_1SYVpPQy4LD4PA4nwRHVyVZ6S_wCm',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
        ],
      },
      {
        unit: 'Test 10-1_ PL RAD 24-25-Sem1_RJC',
        subtopics: [
          {
            title: 'Time and Distance , Boat and Steam , trains',
            videoLink: 'https://www.youtube.com/playlist?list=PLvTTv60o7qj_ZT2pXjgXxue0AlgkpH0ZO',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
        ],
      },
      {
        unit: 'Test 11-1_ PL RAD 24-25-Sem1_RJC',
        subtopics: [
          {
            title: 'Permutation combination , Data Interpretation, Syllogism',
            videoLink: 'https://www.youtube.com/playlist?list=PL1zxEeUFe9lfDhh_Dewp5xHOnjLatGItQ',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
        ],
      },
      {
        unit: 'Test 12-1_ PL RAD 24-25-Sem1_RJC',
        subtopics: [
          {
            title: 'Verbal Ability',
            videoLink: 'https://www.youtube.com/playlist?list=PLYA_1SYVpPQy4LD4PA4nwRHVyVZ6S_wCm',
            notesLink: 'https://docs.google.com/document/d/1EiUDPY76pxawXT5J38SJKmRC8SEuclyuCbC_S4xImCM/edit?tab=t.0',
          },
        ],
      },
    ],
  },
  {
    subject: 'ASEP-1',
    mainTittle: " New Ideas For Your Asep-projects ",
    units: [
      {
        unit: 'Web devlopement',
        subtopics: [
          {
            title: 'Analogy , Simplification , Number Series',
            videoLink: 'https://www.youtube.com/playlist?list=PL8p2I9GklV454LdGfDOw0KkNazKuA-6B2',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },
        ],
      },
      {
        unit: 'App devlopement',
        subtopics: [
          {
            title: 'Ages , Average and Direction Sense',
            videoLink: 'https://www.youtube.com/playlist?list=PLpyc33gOcbVA4qXMoQ5vmhefTruk5t9lt',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },

        ],
      },
      {
        unit: 'AI/ML',
        subtopics: [
          {
            title: 'Ratio and Proportion , Blood Relation , Ranking',
            videoLink: 'https://www.youtube.com/playlist?list=PL1zxEeUFe9lfDhh_Dewp5xHOnjLatGItQ',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },

        ],
      },
      {
        unit: 'Data Science',
        subtopics: [
          {
            title: ' Percentage , Alphanumeric Series and Number System',
            videoLink: 'https://www.youtube.com/playlist?list=PLBlnK6fEyqRhMP7gwIe2j0hb1PCvYn0RI',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          },

        ],
      },
      {
        unit: ' Hardware (Arduino)',
        subtopics: [
          {
            title: ' Ratio Partnership , LCM HCF.',
            videoLink: 'https://www.youtube.com/playlist?list=PLvTTv60o7qj_ZT2pXjgXxue0AlgkpH0ZO',
            notesLink: 'https://example.com/notes/laws-of-motion.pdf',
          }
        ],
      },
    ],
  },
  {
    subject: 'c',
    units: [
      {
        unit: 'Fundamentals of C Language and Programming Constructs:',
        subtopics: [
          {
            title: ' Variables, Operators and Input/ Output',
            videoLink: 'https://youtu.be/rQoqCP7LX60?si=TqJWxuISp7IqpeA2',
            notesLink: 'https://drive.google.com/file/d/1h-jkmy-fobkXRBr5XFCZXctneNx9EDtX/view?pli=1',
          },
          {
            title: 'If Else in',
            videoLink: 'https://youtu.be/7PSfRdeY5qE?si=Mzb_mBMX5vOITiaG',
            notesLink: 'https://drive.google.com/file/d/1N1ahGfZc4wKOIysFsJjymBlMtodpuhen/view',
          },
          {
            title: 'Loops ',
            videoLink: 'https://youtu.be/wYvrBXUfFfw?si=nS1RrNG5MdbSt30Y',
            notesLink: 'https://drive.google.com/drive/folders/1-4tUD_2wNBM7QPSyY36Ev9gkcghePTQD',
          },
          {
            title: 'Pattern Printing ',
            videoLink: 'https://youtu.be/clIcH1ALHMw?si=s7bcuym370iDSaUU',
            notesLink: 'https://drive.google.com/file/d/1zGi3n-4wya_7PqKqGj6ZJu4KEcwuNdnY/view',
          },
        ],
      },
      {
        unit: 'Functions & Pointers',
        subtopics: [
          {
            title: 'Functions & Pointers',
            videoLink: 'https://youtu.be/mIY3QVktHU8?si=BFQuasQGMfeRs37P',
            notesLink: 'https://drive.google.com/file/d/1701LzeKDZsxigj9nATmlxcWUpQqHTGkC/view',
          },

        ],
      },
      {
        unit: 'Recursion ',
        subtopics: [
          {
            title: 'Recursion ',
            videoLink: 'https://youtu.be/Bd-1YM8taBc?si=3FJaStqYiqLSO45L',
            notesLink: 'https://drive.google.com/file/d/1_RhGohsGEZpgwrnVuvhgNrk2798v49Qq/view',
          },

        ],
      },
      {
        unit: 'Arrays ',
        subtopics: [
          {
            title: 'Arrays',
            videoLink: 'https://youtu.be/aWKJ5lRgI3U?si=Fo7TGeP_LilKwn8m',
            notesLink: 'https://pwskills.com/course/C++--Foundation/',
          },
          {
            title: '2D Arrays',
            videoLink: 'https://youtu.be/sEiMDFdbPGo?si=DYr79kuW-3z0qUt8',
            notesLink: 'https://drive.google.com/file/d/1fOwBJtu__0QI-YA0qnrBroBHYjU7izs1/view',
          },

        ],
      },
      {
        unit: ' Structures  ',
        subtopics: [
          {
            title: 'Structures  .',
            videoLink: 'https://youtu.be/nDmULDo8D18?si=HjyHOfT54rFy_yqy',
            notesLink: 'https://drive.google.com/file/d/1wMAWNxaDA4Ft3U20smpHUOmr1rL5CNWu/view',
          }
        ],
      },
      {
        unit: ' File Handling ',
        subtopics: [
          {
            title: 'File Handling ',
            videoLink: 'https://youtu.be/4DljBbiC2p4?si=-UOymCbQ-ZsyR9Ox',
            notesLink: 'https://pwskills.com/course/C++--Foundation/',
          }
        ],
      },
      {
        unit: ' Strings ',
        subtopics: [
          {
            title: 'Strings .',
            videoLink: 'https://youtu.be/8qKp63Ox3vQ?si=PdO5w03MC7wpEoAE',
            notesLink: 'https://drive.google.com/file/d/1MjHOQSEOdMZREnmFTKtTrkTyWi_lIYFg/view',
          }
        ],
      },
    ],
  },
{
    subject: 'Web Development',
    units: [
      {
        unit: 'Unit 01: HTML5.x',
        subtopics: [
          {
            title: 'What is HTML? What is website? History of HTML',
            videoLink: 'https://www.youtube.com/watch?v=kUMe1FH4CHE',
            notesLink: 'https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics',
          },
          {
            title: 'HTML4 vs HTML5 document structure',
            videoLink: 'https://www.youtube.com/watch?v=Yia8SllM1Y0',
            notesLink: 'https://www.w3schools.com/html/html5_intro.asp',
          },
          {
            title: 'HTML elements:- The Root Element',
            videoLink: 'https://www.youtube.com/watch?v=ok-plXXHlWw',
            notesLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html',
          },
          {
            title: 'Document Metadata Elements (Meta Tags)',
            videoLink: 'https://www.youtube.com/watch?v=fX0O_hS9e2w',
            notesLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta',
          },
          {
            title: 'Sections Elements (Header, Footer, Main, Section)',
            videoLink: 'https://www.youtube.com/watch?v=R0_pYmSIsK0',
            notesLink: 'https://www.w3schools.com/html/html5_semantic_elements.asp',
          },
          {
            title: 'Text-Level Semantic Elements (Basic Formatting)',
            videoLink: 'https://www.youtube.com/watch?v=Zf0VvO83B_0',
            notesLink: 'https://www.w3schools.com/html/html_formatting.asp',
          },
          {
            title: 'Embedded Content (Image, iFrame, Multimedia)',
            videoLink: 'https://www.youtube.com/watch?v=09oEAnNidIs',
            notesLink: 'https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding',
          },
          {
            title: 'Tabular Data Elements (Tables)',
            videoLink: 'https://www.youtube.com/watch?v=8S3v9vS2m9A',
            notesLink: 'https://www.w3schools.com/html/html_tables.asp',
          },
          {
            title: 'Grouping Content Elements (div, span) and Edits',
            videoLink: 'https://www.youtube.com/watch?v=I7X_910pY_0',
            notesLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning',
          },
        ],
      },
      {
        unit: 'Unit 02: CSS3.x',
        subtopics: [
          {
            title: 'What is CSS? Introduction to CSS',
            videoLink: 'https://www.youtube.com/watch?v=OXGznpKZ_sA',
            notesLink: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/What_is_CSS',
          },
          {
            title: 'Difference between CSS2 and CSS3 versions',
            videoLink: 'https://www.youtube.com/watch?v=1Rs2ND1RYYc',
            notesLink: 'https://www.geeksforgeeks.org/difference-between-css-and-css3/',
          },
          {
            title: 'CSS3 Syntax and Selectors',
            videoLink: 'https://www.youtube.com/watch?v=l1mER17x_v0',
            notesLink: 'https://www.w3schools.com/css/css_selectors.asp',
          },
          {
            title: 'CSS3 Color, Background, and Cursor',
            videoLink: 'https://www.youtube.com/watch?v=-YvXreF6P_g',
            notesLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS/background',
          },
          {
            title: 'CSS3 Text and Fonts',
            videoLink: 'https://www.youtube.com/watch?v=93P0N9_F5k0',
            notesLink: 'https://www.w3schools.com/css/css_font.asp',
          },
          {
            title: 'CSS3 List and Tables',
            videoLink: 'https://www.youtube.com/watch?v=zY_T0M8vS-Y',
            notesLink: 'https://www.w3schools.com/css/css_table.asp',
          },
          {
            title: 'CSS3 Box Model',
            videoLink: 'https://www.youtube.com/watch?v=nSst4-WbEzU',
            notesLink: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model',
          },
          {
            title: 'CSS3 Display and Positioning',
            videoLink: 'https://www.youtube.com/watch?v=jx5jmI0UlXU',
            notesLink: 'https://www.w3schools.com/css/css_positioning.asp',
          },
          {
            title: 'CSS3 Floats and Clear Properties',
            videoLink: 'https://www.youtube.com/watch?v=xAra0Xre56o',
            notesLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS/float',
          },
        ],
      },
      {
        unit: 'Unit 03: JavaScript (Functional) ECMA 2024',
        subtopics: [
          {
            title: 'What is JavaScript? ECMA Script 2024 Intro',
            videoLink: 'https://www.youtube.com/watch?v=sscX432bLY0',
            notesLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/About_JavaScript',
          },
          {
            title: 'Writing first JS Code: "Hello World"',
            videoLink: 'https://www.youtube.com/watch?v=8dWL3wF_OMw',
            notesLink: 'https://www.w3schools.com/js/js_whereto.asp',
          },
          {
            title: 'Declaring Variables (let, const, var)',
            videoLink: 'https://www.youtube.com/watch?v=OicU2T0vKCI',
            notesLink: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables',
          },
          {
            title: 'Data Types and Operators',
            videoLink: 'https://www.youtube.com/watch?v=puu6p_M6u-s',
            notesLink: 'https://www.w3schools.com/js/js_datatypes.asp',
          },
          {
            title: 'Numbers and String Objects',
            videoLink: 'https://www.youtube.com/watch?v=1it1_pY8fNo',
            notesLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String',
          },
          {
            title: 'Conditional Statements: if-else and switch',
            videoLink: 'https://www.youtube.com/watch?v=IsG4Xd6LlsM',
            notesLink: 'https://www.w3schools.com/js/js_if_else.asp',
          },
          {
            title: 'Looping constructs: for and while',
            videoLink: 'https://www.youtube.com/watch?v=s9wW2PpJsmQ',
            notesLink: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration',
          },
          {
            title: 'Objects and Functions',
            videoLink: 'https://www.youtube.com/watch?v=uH-6n6QDdzs',
            notesLink: 'https://www.w3schools.com/js/js_functions.asp',
          },
          {
            title: 'Bugs, Errors, Try and Catch',
            videoLink: 'https://www.youtube.com/watch?v=cFTFtuEQ-10',
            notesLink: 'https://www.w3schools.com/js/js_errors.asp',
          },
        ],
      },
      {
        unit: 'Unit 04: JavaScript (OOPS) & DOM',
        subtopics: [
          {
            title: 'Object Oriented Programming & Classes',
            videoLink: 'https://www.youtube.com/watch?v=2ZphE5HcQPQ',
            notesLink: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript',
          },
          {
            title: 'Constructors and Inheritance',
            videoLink: 'https://www.youtube.com/watch?v=MfxBfRD067o',
            notesLink: 'https://www.w3schools.com/js/js_class_inheritance.asp',
          },
          {
            title: 'Spread, Rest, and Destructuring',
            videoLink: 'https://www.youtube.com/watch?v=NIqHuW830-g',
            notesLink: 'https://www.freecodecamp.org/news/javascript-rest-and-spread-operators/',
          },
          {
            title: 'JavaScript DOM & Manipulations',
            videoLink: 'https://www.youtube.com/watch?v=0IKHIWnz62w',
            notesLink: 'https://www.w3schools.com/js/js_htmldom.asp',
          },
          {
            title: 'JavaScript Selectors & Interactivity',
            videoLink: 'https://www.youtube.com/watch?v=5fb2aPlgoys',
            notesLink: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction',
          },
          {
            title: 'JSON (JS Object Notation)',
            videoLink: 'https://www.youtube.com/watch?v=iiADhChRriM',
            notesLink: 'https://www.w3schools.com/js/js_json_intro.asp',
          },
        ],
      },
      {
        unit: 'Unit 05: JQuery 3.7.x',
        subtopics: [
          {
            title: 'Introduction to JQuery',
            videoLink: 'https://www.youtube.com/watch?v=hMxGhHNOkCU',
            notesLink: 'https://www.w3schools.com/jquery/jquery_intro.asp',
          },
          {
            title: 'Selecting Elements & Changing Styles',
            videoLink: 'https://www.youtube.com/watch?v=G-POtu9J-m4',
            notesLink: 'https://www.w3schools.com/jquery/jquery_selectors.asp',
          },
          {
            title: 'DOM: Appending and Removing Elements',
            videoLink: 'https://www.youtube.com/watch?v=5M3E3M-q2F0',
            notesLink: 'https://www.w3schools.com/jquery/jquery_dom_add.asp',
          },
          {
            title: 'Handling Events in JQuery',
            videoLink: 'https://www.youtube.com/watch?v=hMxGhHNOkCU&t=600s',
            notesLink: 'https://www.w3schools.com/jquery/jquery_events.asp',
          },
        ],
      },
      {
        unit: 'Unit 06: Bootstrap 4 and 5.x',
        subtopics: [
          {
            title: 'Bootstrap Intro & Responsive Design',
            videoLink: 'https://www.youtube.com/watch?v=Jyvffr3aCp0',
            notesLink: 'https://getbootstrap.com/docs/5.0/getting-started/introduction/',
          },
          {
            title: 'Containers and Grid System',
            videoLink: 'https://www.youtube.com/watch?v=0S_3GvAAn-A',
            notesLink: 'https://getbootstrap.com/docs/5.0/layout/grid/',
          },
          {
            title: 'Typography and Colors',
            videoLink: 'https://www.youtube.com/watch?v=Jyvffr3aCp0&t=1500s',
            notesLink: 'https://getbootstrap.com/docs/5.0/content/typography/',
          },
          {
            title: 'Bootstrap Components: Tables, Images, Alerts',
            videoLink: 'https://www.youtube.com/watch?v=Jyvffr3aCp0&t=3200s',
            notesLink: 'https://getbootstrap.com/docs/5.0/components/alerts/',
          },
        ],
      },
    ],
}
]
export const dummypyqsubject = [
  {
    ModuleName: "module1",
    subjects: [
      {
        id: 1,
        name: "Math",
        text: "LINEAR ALGEBRA AND DIFFERENTIAL EQUATIONS",
        image: image1,
      },
      {
        id: 2,
        name: "COOA",
        text: "COMPUTER ORGANIZATION AND ARCHITECTURE",
        image: image2, // Replace with real image
      },
      {
        id: 3,
        name: "C",
        text: "PROBLEM SOLVING & PROGRAMMING",
        image: image3,
      },
      {
        id: 4,
        name: "Web Development",
        text: "Web Development",
        image: image4,
      },
      {
        id: 5,
        name: "ASEP-1",
        text: "APPLIED SCIENCE & ENGINEERING PROJECT-1",
        image: imgae8,
      },

      {
        id: 7,
        name: "RAAD-1",
        text: "REASONING & APTITUDE DEVELOPMENT - 1",
        image: image7,
      },
    ],
  },
  {
    ModuleName: "module2",
    subjects: [
      {
        id: 1,
        name: "Math",
        text: "CALCULUS AND STATISTICS",
        image: image1,
      },
      {
        id: 2,
        name: "PYTHON",
        text: "PYTHON FOR ENGINEERS",
        image: image2, // Replace with real image
      },
      {
        id: 2,
        name: "PYTHON",
        text: "PYTHON FOR ENGINEERS",
        image: image10, // Replace with real image
      },
      {
        id: 4,
        name: "AEM",
        text: "APPLIED ELECTROMECHANICS",
        image: image4,
      },
      {
        id: 5,
        name: "ASEP-2",
        text: "APPLIED SCIENCE & ENGINEERING PROJECT-2",
        image: image9,
      },
      {
        id: 7,
        name: "RAAD-2",
        text: "REASONING & APTITUDE DEVELOPMENT - 2",
        image: image7,
      },
    ],
  },
];


export const dummyPyqs = [
  {
    subject: 'MATH',
    units: [
      {
        unit: 'Unit 01: Linear Algebra',
        subtopics: [
          {
            title: '2024',
            practiceQuestion: 'https://www.youtube.com/watch?v=efgh5678',
           
          },

        ],
      },
      {
        unit: 'Unit 02: Differential Equations',
        subtopics: [
          {
            title: '2024',
            practiceQuestion: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: amepdf,
          },

        ],
      },
      {
        unit: 'Unit 03:INNER PRODUCT SPACES',
        subtopics: [
          {
            title: '2024',
            practiceQuestion: 'https://www.youtube.com/watch?v=efgh5678',
           
          },

        ],
      },
      {
        unit: 'Unit 04: LINEAR TRANSFORMA TION',
        subtopics: [
          {
            title: 'First Order DEs',
            practiceQuestion: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/first-order-des.pdf',
          },
        ],
      },
      {
        unit: 'Unit 05: EIGEN VALUES AND EIGEN VECTORS',
        subtopics: [
          {
            title: '2024',
            practiceQuestion: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/first-order-des.pdf',
          }
        ],
      },
      {
        unit: 'Unit 06: LINEAR DIFFERENTIAL EQUATIONS',
        subtopics: [
          {
            title: '2024',
            practiceQuestion: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/first-order-des.pdf',
          }
        ],
      },
    ],
  },
  {
    subject: 'COOA',
    units: [
      {
        unit: 'Unit 01: Mechanics',
        subtopics: [
          {
            title: '2024',
            practiceQuestion: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
    ],
  },
  {
    subject: 'C',
    units: [
      {
        unit: 'Unit 01: Mechanics',
        subtopics: [
          {
            title: '2024',
            practiceQuestion: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
    ],
  },
  {
    subject: 'Web Development',
    units: [
      {
        unit: 'Unit 01: Mechanics',
        subtopics: [
          {
            title: '2024',
            practiceQuestion: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
    ],
  },
  {
    subject: 'COOA',
    units: [
      {
        unit: 'Unit 01: Mechanics',
        subtopics: [
          {
            title: '2024',
            practiceQuestion: 'https://www.youtube.com/watch?v=efgh5678',
            notesLink: 'https://example.com/notes/work-energy.pdf',
          },
        ],
      },
    ],
  },
];
