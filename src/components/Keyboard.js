// std library imports
import React, { Component } from 'react'
import { connect } from 'react-redux'

// node_modules imports
import ReactTooltip from 'react-tooltip'


class Keyboard extends Component {

	renderKeyboard() {
		return (
			<svg
				data-tip
				className="nav-svg keyboard-img"
				version="1.1"
				x="0px"
				y="0px"
				viewBox="0 0 502.512 241" >
				<path d="M251.585,0.013c77.163,0,154.327,0.004,231.49-0.013c4.473-0.001,8.741,0.65,12.387,3.445
					c4.696,3.603,6.633,8.616,7.037,14.351c0.021,0.322,0.007,0.647,0.007,0.972c0,67.983-0.003,135.966,0.004,203.951
					c0.001,3.697-0.703,7.202-2.781,10.311c-3.646,5.451-9.085,7.517-15.347,7.953c-0.431,0.03-0.864,0.012-1.296,0.012
					c-154.543,0.001-309.086,0-463.629,0.007c-3.27,0.001-6.497-0.256-9.475-1.705c-6.75-3.288-9.431-9.119-9.955-16.246
					c-0.027-0.376-0.004-0.756-0.004-1.134C0.024,154.093,0.048,86.271,0,18.45C-0.008,7.07,7.663,0.67,17.99,0.029
					c0.698-0.043,1.402-0.017,2.104-0.017C97.258,0.013,174.421,0.013,251.585,0.013z M250.283,233.135
					c77.217,0,154.434,0.001,231.649-0.007c1.187,0,2.377-0.04,3.556-0.158c5.693-0.569,8.972-4.067,9.199-9.79
					c0.034-0.863,0.025-1.728,0.025-2.592c0.001-57.454,0.001-114.908,0.001-172.361c0-9.612,0.006-19.223-0.003-28.835
					C494.704,11.69,490.953,7.91,483.334,7.9c-0.216,0-0.433,0-0.648,0c-154.163,0-308.327,0-462.491,0c-0.54,0-1.081-0.011-1.619,0.005
					c-7.069,0.208-10.71,3.93-10.745,10.979c-0.001,0.324,0,0.648,0,0.972c0,67.065,0,134.131,0,201.196c0,0.54-0.034,1.083,0.01,1.619
					c0.408,4.998,2.484,10.446,10.308,10.438c0.918-0.002,1.836,0.023,2.753,0.023C97.362,233.135,173.823,233.135,250.283,233.135z"/>
				<path style={{fill: 'none'}} d="M250.283,233.135c-76.46,0-152.922,0-229.383-0.001c-0.917,0-1.835-0.024-2.753-0.024
					c-7.822,0.009-9.899-5.439-10.308-10.438c-0.044-0.536-0.01-1.079-0.01-1.619c0-67.064,0-134.131,0-201.196
					c0-0.324-0.001-0.648,0-0.972c0.035-7.048,3.676-10.771,10.746-10.979c0.539-0.016,1.08-0.005,1.619-0.005
					c154.164,0,308.328,0,462.491,0c0.217,0,0.434,0,0.648,0c7.619,0.01,11.37,3.79,11.377,11.492
					c0.009,9.612,0.003,19.223,0.003,28.835c0,57.454,0,114.907-0.001,172.361c0,0.864,0.009,1.729-0.025,2.592
					c-0.229,5.722-3.506,9.222-9.198,9.79c-1.18,0.118-2.37,0.158-3.557,0.158C404.717,233.136,327.5,233.135,250.283,233.135z
					 M250.778,173.95c-42.064,0-84.131,0-126.196,0.001c-3.095,0-3.799,0.706-3.802,3.805c-0.003,7.506-0.003,15.012,0,22.518
					c0.002,3.408,0.68,4.09,4.061,4.09c23.76,0.001,47.519,0,71.279,0c60.101,0,120.202,0,180.303,0c3.42,0,4.177-0.76,4.177-4.186
					c0.002-7.344,0.002-14.688,0-22.031c0-3.512-0.672-4.196-4.109-4.196C334.585,173.95,292.682,173.95,250.778,173.95z
					 M431.861,128.197c-10.795,0-21.59-0.008-32.385,0.004c-2.778,0.003-3.562,0.803-3.563,3.57c-0.007,7.771-0.01,15.545,0.002,23.316
					c0.004,2.616,0.885,3.51,3.495,3.51c21.535,0.008,43.071,0.01,64.607,0c2.733-0.002,3.562-0.858,3.563-3.604
					c0.01-7.665,0.009-15.329,0.001-22.994c-0.002-3.082-0.729-3.801-3.821-3.802C453.128,128.193,442.494,128.196,431.861,128.197z
					 M431.557,173.95c-10.737,0-21.476-0.005-32.213,0.003c-2.581,0.002-3.427,0.833-3.43,3.363c-0.011,7.877-0.014,15.756,0.001,23.634
					c0.005,2.431,0.932,3.403,3.279,3.405c21.477,0.012,42.95,0.013,64.427-0.002c2.407,0,3.347-0.942,3.353-3.334
					c0.021-7.877,0.021-15.756,0.001-23.634c-0.007-2.653-0.841-3.434-3.529-3.435C452.815,173.948,442.187,173.95,431.557,173.95z
					 M70.548,173.95c-10.737,0-21.475-0.005-32.212,0.004c-2.507,0.002-3.368,0.831-3.372,3.25c-0.012,7.932-0.014,15.862,0.001,23.794
					c0.005,2.416,0.932,3.357,3.318,3.359c21.421,0.01,42.841,0.01,64.262,0c2.582-0.002,3.45-0.918,3.453-3.547
					c0.007-7.771,0.009-15.541,0-23.311c-0.003-2.788-0.775-3.548-3.562-3.549C91.807,173.948,81.177,173.95,70.548,173.95z
					 M70.531,128.197c-10.69,0-21.382-0.008-32.072,0.005c-2.698,0.003-3.495,0.812-3.497,3.468c-0.007,7.829-0.011,15.658,0.002,23.487
					c0.004,2.532,0.885,3.438,3.396,3.438c21.382,0.012,42.764,0.012,64.146,0c2.646-0.001,3.491-0.876,3.493-3.5
					c0.008-7.667,0.005-15.334,0.002-23.001c-0.001-3.207-0.688-3.896-3.883-3.896C91.588,128.193,81.06,128.196,70.531,128.197z
					 M60.153,112.836c7.345,0,14.688,0.014,22.03-0.007c2.596-0.007,3.509-0.87,3.517-3.333c0.021-7.883,0.023-15.767-0.001-23.65
					c-0.009-2.531-0.93-3.437-3.437-3.438c-14.579-0.012-29.158-0.013-43.736,0c-2.717,0.002-3.562,0.881-3.563,3.604
					c-0.006,7.667-0.005,15.334,0,23.002c0.001,3.079,0.729,3.817,3.811,3.821C45.898,112.843,53.026,112.837,60.153,112.836z
					 M444.531,112.836c6.531,0,13.063,0.017,19.596-0.008c2.605-0.01,3.448-0.846,3.452-3.365c0.014-7.881,0.016-15.763-0.001-23.644
					c-0.007-2.509-0.914-3.41-3.436-3.413c-13.062-0.012-26.127-0.012-39.189,0c-2.774,0.003-3.666,0.921-3.669,3.72
					c-0.011,7.612-0.009,15.223,0,22.834c0.002,3.033,0.823,3.87,3.812,3.874C431.576,112.844,438.054,112.837,444.531,112.836z
					 M183.54,67.08c4.099,0,8.197,0.026,12.296-0.011c2.04-0.019,3.058-0.983,3.063-2.946c0.027-8.144,0.031-16.287-0.005-24.431
					c-0.009-1.99-1.057-3.02-3.013-3.026c-8.09-0.027-16.18-0.03-24.27,0.002c-2.167,0.009-3.126,1.037-3.131,3.223
					c-0.015,7.982-0.018,15.964,0.002,23.945c0.007,2.332,0.925,3.23,3.245,3.241C175.666,67.097,179.603,67.083,183.54,67.08z
					 M50.115,67.081c4.044,0,8.09,0.023,12.134-0.01c1.993-0.016,3.099-0.928,3.108-2.735c0.046-8.251,0.046-16.503,0.002-24.754
					c-0.01-1.833-1.053-2.898-2.8-2.906c-8.251-0.038-16.503-0.045-24.754,0.007c-1.91,0.012-2.833,1.068-2.837,2.993
					c-0.019,8.09-0.021,16.18,0,24.271c0.006,2.236,0.922,3.119,3.172,3.131C42.132,67.097,46.124,67.082,50.115,67.081z
					 M109.853,52.037c0-4.099,0.024-8.198-0.01-12.296c-0.018-2.086-1.01-3.073-3.102-3.079c-8.036-0.022-16.072-0.026-24.107,0.003
					c-2.18,0.008-3.192,1.042-3.197,3.178c-0.018,7.981-0.02,15.963,0,23.945c0.006,2.316,0.959,3.282,3.22,3.287
					c7.981,0.016,15.964,0.019,23.945-0.001c2.355-0.006,3.239-0.906,3.249-3.227C109.868,59.911,109.855,55.974,109.853,52.037z
					 M332.429,51.907c0-4.045,0.021-8.09-0.01-12.135c-0.016-1.969-0.951-3.084-2.756-3.094c-8.252-0.043-16.504-0.047-24.755,0.001
					c-1.896,0.011-2.894,1.085-2.899,2.971c-0.028,8.144-0.034,16.287,0.004,24.431c0.009,2.017,1.023,2.984,3.017,2.989
					c8.09,0.022,16.18,0.025,24.27,0c2.224-0.006,3.116-0.95,3.127-3.191C332.443,59.889,332.431,55.898,332.429,51.907z M228.045,67.08
					c4.099,0,8.197,0.024,12.295-0.01c2.003-0.017,3.017-0.91,3.025-2.78c0.036-8.25,0.041-16.501-0.005-24.751
					c-0.011-1.917-1.034-2.866-2.965-2.873c-8.088-0.026-16.178-0.03-24.267,0.001c-2.16,0.009-3.162,1.038-3.168,3.218
					c-0.027,7.981-0.031,15.962,0.002,23.943c0.01,2.292,1.011,3.238,3.271,3.249C220.172,67.097,224.109,67.083,228.045,67.08z
					 M101.055,97.464c0,3.888-0.005,7.775,0.002,11.663c0.005,2.958,0.751,3.698,3.759,3.707c3.78,0.012,7.561,0.004,11.339,0.003
					c4.05-0.001,8.101,0.027,12.148-0.019c2.043-0.023,3.135-0.909,3.146-2.708c0.051-8.261,0.052-16.522,0.002-24.784
					c-0.013-1.915-1.051-2.896-2.974-2.905c-8.1-0.038-16.199-0.042-24.298-0.001c-2.216,0.011-3.112,1.01-3.121,3.218
					C101.044,89.581,101.056,93.523,101.055,97.464z M146.78,97.349c0,4.099-0.019,8.197,0.009,12.295
					c0.013,2.043,0.862,3.131,2.671,3.142c8.304,0.052,16.608,0.056,24.913,0.007c1.938-0.011,2.829-1.032,2.833-2.986
					c0.019-8.089,0.021-16.178-0.002-24.267c-0.007-2.096-0.988-3.114-3.072-3.123c-8.035-0.034-16.07-0.036-24.105-0.001
					c-2.296,0.01-3.23,1.015-3.24,3.284C146.766,89.583,146.779,93.466,146.78,97.349z M272.55,67.081c4.098,0,8.197,0.026,12.295-0.011
					c2.094-0.019,3.055-1,3.102-3.089c0.041-1.778,0.012-3.559,0.012-5.338c0-6.148,0.011-12.295-0.006-18.443
					c-0.008-2.416-0.916-3.522-3.018-3.531c-8.089-0.033-16.179-0.033-24.268-0.001c-2.201,0.008-3.127,0.991-3.131,3.202
					c-0.017,7.981-0.019,15.962,0.002,23.943c0.006,2.431,0.882,3.259,3.362,3.268C264.784,67.093,268.667,67.083,272.55,67.081z
					 M406.142,67.082c4.045,0,8.09,0.02,12.135-0.008c2.092-0.014,3.183-0.929,3.19-2.821c0.04-8.197,0.041-16.395,0.001-24.592
					c-0.01-1.976-1.08-2.989-3.047-2.996c-8.09-0.025-16.179-0.03-24.27,0.004c-2.108,0.009-3.078,1.029-3.083,3.092
					c-0.015,8.035-0.017,16.071,0,24.106c0.006,2.317,0.915,3.2,3.263,3.211C398.268,67.096,402.205,67.083,406.142,67.082z
					 M289.039,143.402c0-4.049,0.023-8.1-0.011-12.148c-0.018-2.017-0.904-3.023-2.774-3.031c-8.26-0.035-16.521-0.037-24.781,0.006
					c-1.855,0.01-2.838,0.994-2.848,2.823c-0.04,8.152-0.043,16.306-0.004,24.458c0.01,2.098,1.025,3.072,3.133,3.08
					c7.99,0.03,15.98,0.031,23.972,0.001c2.425-0.009,3.302-0.942,3.312-3.364C289.055,151.285,289.042,147.343,289.039,143.402z
					 M405.979,97.754c0-3.942,0.012-7.884-0.004-11.826c-0.009-2.604-0.907-3.513-3.501-3.522c-4.536-0.016-9.072-0.005-13.606-0.004
					c-3.349,0-6.696-0.031-10.044,0.014c-2.202,0.03-3.258,0.964-3.266,2.948c-0.032,8.154-0.036,16.308,0,24.461
					c0.009,2.013,0.997,2.98,3.024,2.99c8.1,0.033,16.198,0.039,24.299-0.001c2.237-0.011,3.082-0.962,3.093-3.234
					C405.99,105.638,405.978,101.695,405.979,97.754z M329.828,97.513c0,4.104-0.023,8.208,0.011,12.312
					c0.017,1.979,0.912,2.971,2.832,2.979c8.207,0.04,16.415,0.044,24.622-0.002c2.025-0.012,2.944-1.026,2.951-3.062
					c0.021-8.045,0.024-16.091-0.003-24.136c-0.009-2.186-1.008-3.183-3.193-3.19c-7.991-0.027-15.982-0.031-23.974,0.002
					c-2.319,0.01-3.236,0.993-3.243,3.271C329.817,89.629,329.827,93.571,329.828,97.513z M465.945,51.819
					c0-3.991,0.021-7.981-0.008-11.972c-0.016-2.214-0.964-3.162-3.15-3.188c-2.48-0.029-4.962-0.008-7.442-0.008
					c-5.446,0-10.894-0.011-16.34,0.006c-2.37,0.008-3.46,0.938-3.469,3.079c-0.031,8.089-0.034,16.178,0.004,24.267
					c0.009,2.041,1.019,3.057,2.951,3.063c8.144,0.025,16.285,0.029,24.429,0c2.123-0.007,3.011-0.962,3.021-3.115
					C465.96,59.908,465.946,55.864,465.945,51.819z M212.874,143.312c0,3.832-0.004,7.666,0.002,11.5
					c0.004,2.942,0.826,3.782,3.721,3.789c4.751,0.008,9.503,0.002,14.254,0.002c3.078,0,6.156,0.033,9.233-0.016
					c2.198-0.035,3.207-0.968,3.213-2.986c0.026-8.1,0.028-16.199,0-24.298c-0.007-2.134-0.961-3.088-3.073-3.094
					c-8.045-0.024-16.091-0.026-24.136,0c-2.35,0.007-3.201,0.918-3.21,3.278C212.865,135.429,212.875,139.371,212.874,143.312z
					 M361.745,67.081c4.049,0,8.099,0.026,12.146-0.011c2.057-0.019,2.96-0.937,3.039-2.961c0.04-1.024,0.013-2.052,0.013-3.077
					c0-6.965,0.013-13.931-0.009-20.896c-0.008-2.376-0.868-3.454-2.893-3.463c-8.153-0.039-16.308-0.039-24.459-0.002
					c-2.03,0.009-3.037,0.986-3.048,2.991c-0.043,8.099-0.048,16.198-0.002,24.296c0.013,2.23,0.995,3.108,3.224,3.12
					C353.754,67.097,357.749,67.083,361.745,67.081z M284.077,97.603c0,3.995-0.021,7.99,0.008,11.985
					c0.017,2.307,0.863,3.224,3.082,3.232c8.044,0.03,16.089,0.034,24.133-0.001c2.23-0.01,3.184-0.971,3.191-3.172
					c0.027-7.99,0.032-15.98-0.004-23.971c-0.011-2.301-1.005-3.258-3.29-3.265c-7.938-0.023-15.873-0.028-23.81,0.002
					c-2.413,0.009-3.299,0.956-3.308,3.366C284.065,89.72,284.076,93.661,284.077,97.603z M334.788,143.521
					c0-4.049,0.027-8.098-0.013-12.146c-0.021-2.224-0.895-3.158-2.98-3.166c-8.098-0.026-16.194-0.03-24.292,0.001
					c-2.216,0.008-3.125,0.96-3.132,3.209c-0.022,7.936-0.025,15.871,0.002,23.807c0.008,2.428,0.949,3.36,3.337,3.366
					c7.882,0.021,15.763,0.022,23.645,0c2.55-0.007,3.417-0.892,3.432-3.411C334.807,151.296,334.791,147.409,334.788,143.521z
					 M365.51,128.201c-4.103,0-8.206-0.031-12.309,0.013c-2.053,0.021-3.001,0.892-3.01,2.789c-0.03,8.206-0.032,16.411,0,24.616
					c0.009,1.973,0.938,2.949,2.868,2.959c8.151,0.041,16.304,0.045,24.454-0.001c2.117-0.013,3.063-1.021,3.071-3.14
					c0.03-7.989,0.033-15.979,0-23.969c-0.01-2.374-0.985-3.256-3.416-3.267C373.283,128.186,369.396,128.197,365.51,128.201z
					 M167.151,143.223c0,3.941-0.008,7.883,0.003,11.824c0.009,2.721,0.845,3.548,3.605,3.553c5.885,0.012,11.77,0.004,17.654,0.004
					c1.998,0,3.997,0.043,5.993-0.018c2.21-0.066,3.115-1.025,3.167-3.222c0.021-0.917,0.005-1.835,0.005-2.753
					c0-6.965,0.009-13.93-0.005-20.894c-0.006-2.454-0.867-3.497-3.012-3.504c-8.098-0.03-16.196-0.032-24.295-0.002
					c-2.267,0.009-3.101,0.911-3.11,3.188C167.14,135.341,167.151,139.282,167.151,143.223z M268.692,97.769
					c0-4.049,0.025-8.098-0.01-12.147c-0.019-2.193-0.907-3.19-2.979-3.201c-8.099-0.039-16.195-0.042-24.293,0.001
					c-2.143,0.011-3.116,0.988-3.126,3.088c-0.037,8.043-0.041,16.088,0.001,24.131c0.012,2.246,0.968,3.172,3.175,3.18
					c7.99,0.028,15.979,0.031,23.969,0c2.437-0.01,3.249-0.901,3.26-3.394C268.708,105.542,268.695,101.656,268.692,97.769z
					 M222.945,97.754c0-4.05,0.021-8.1-0.009-12.15c-0.016-2.093-0.904-3.162-2.843-3.173c-8.208-0.048-16.416-0.053-24.623,0.004
					c-2.011,0.015-2.949,1.078-2.954,3.09c-0.023,8.045-0.028,16.091,0.003,24.137c0.009,2.204,0.978,3.153,3.198,3.161
					c7.992,0.028,15.983,0.031,23.975-0.001c2.437-0.01,3.241-0.906,3.25-3.404C222.957,105.529,222.946,101.642,222.945,97.754z
					 M151.801,143.459c0-3.994,0.035-7.989-0.013-11.982c-0.028-2.377-0.93-3.266-3.236-3.271c-7.989-0.02-15.978-0.023-23.967,0.004
					c-2.341,0.008-3.201,0.903-3.207,3.275c-0.02,7.882-0.021,15.763,0,23.644c0.007,2.631,0.879,3.467,3.54,3.472
					c7.719,0.012,15.438,0.013,23.157,0c2.9-0.006,3.717-0.85,3.726-3.805C151.813,151.016,151.804,147.237,151.801,143.459z
					 M139.147,67.081c4.051,0,8.101,0.024,12.149-0.01c2.06-0.019,3.066-0.932,3.077-2.931c0.04-8.153,0.045-16.306-0.006-24.459
					c-0.014-2.099-1.053-3.015-3.182-3.021c-7.991-0.018-15.981-0.022-23.973,0.002c-2.238,0.007-3.226,0.945-3.233,3.127
					c-0.031,8.045-0.037,16.09,0.003,24.135c0.013,2.334,0.938,3.145,3.339,3.154C131.264,67.094,135.206,67.083,139.147,67.081z"/>
				<path d="M250.778,173.95c41.903,0,83.808,0,125.712,0c3.438,0,4.109,0.685,4.109,4.196c0.002,7.344,0.002,14.688,0,22.031
					c0,3.426-0.757,4.186-4.177,4.186c-60.102,0.001-120.202,0-180.303,0c-23.761,0-47.521,0-71.279,0c-3.38,0-4.059-0.682-4.061-4.09
					c-0.003-7.506-0.003-15.012,0-22.518c0.002-3.099,0.707-3.805,3.802-3.805C166.647,173.95,208.713,173.95,250.778,173.95z"/>
				<path d="M431.861,128.196c10.634,0,21.268-0.003,31.899,0.001c3.092,0.001,3.819,0.72,3.821,3.802
					c0.008,7.665,0.009,15.329-0.001,22.994c-0.003,2.746-0.83,3.603-3.563,3.604c-21.536,0.01-43.072,0.008-64.607,0
					c-2.61,0-3.491-0.894-3.495-3.51c-0.012-7.771-0.008-15.545-0.002-23.316c0.003-2.768,0.786-3.567,3.563-3.57
					C410.271,128.189,421.066,128.197,431.861,128.196z"/>
				<path d="M431.557,173.95c10.63,0,21.259-0.002,31.889,0.001c2.688,0.001,3.522,0.781,3.529,3.435
					c0.021,7.877,0.021,15.755-0.001,23.634c-0.006,2.392-0.944,3.332-3.353,3.334c-21.477,0.015-42.95,0.014-64.427,0.002
					c-2.349,0-3.274-0.975-3.279-3.405c-0.015-7.878-0.012-15.757-0.001-23.634c0.003-2.53,0.849-3.361,3.43-3.363
					C410.081,173.945,420.819,173.95,431.557,173.95z"/>
				<path d="M70.548,173.95c10.629,0,21.259-0.002,31.888,0.001c2.787,0.001,3.56,0.761,3.562,3.549c0.009,7.77,0.007,15.54,0,23.311
					c-0.002,2.629-0.871,3.545-3.453,3.547c-21.421,0.01-42.841,0.01-64.262,0c-2.387-0.002-3.313-0.943-3.318-3.359
					c-0.015-7.932-0.014-15.863-0.001-23.794c0.004-2.419,0.865-3.248,3.372-3.25C49.073,173.945,59.811,173.95,70.548,173.95z"/>
				<path d="M70.531,128.196c10.528,0,21.058-0.003,31.586,0.001c3.195,0.001,3.882,0.688,3.883,3.896
					c0.003,7.667,0.006,15.334-0.002,23.001c-0.002,2.624-0.848,3.5-3.493,3.5c-21.382,0.012-42.763,0.012-64.146,0
					c-2.511-0.001-3.393-0.906-3.396-3.438c-0.013-7.829-0.009-15.658-0.002-23.487c0.002-2.657,0.799-3.465,3.497-3.468
					C49.149,128.189,59.84,128.197,70.531,128.196z"/>
				<path d="M60.153,112.837c-7.127,0-14.255,0.006-21.382-0.002c-3.08-0.003-3.809-0.742-3.811-3.821
					c-0.004-7.667-0.005-15.334,0-23.002c0.002-2.723,0.847-3.603,3.563-3.604c14.579-0.013,29.158-0.012,43.736,0
					c2.507,0.002,3.428,0.908,3.436,3.439c0.026,7.883,0.023,15.767,0.001,23.65c-0.006,2.463-0.919,3.325-3.516,3.333
					C74.84,112.85,67.497,112.836,60.153,112.837z"/>
				<path d="M444.531,112.837c-6.479,0-12.955,0.007-19.435-0.002c-2.989-0.004-3.812-0.841-3.812-3.874
					c-0.009-7.611-0.011-15.223,0-22.834c0.003-2.799,0.895-3.717,3.669-3.72c13.062-0.012,26.127-0.012,39.189,0
					c2.521,0.002,3.43,0.903,3.436,3.413c0.017,7.881,0.015,15.763,0.001,23.644c-0.004,2.519-0.847,3.355-3.452,3.365
					C457.596,112.853,451.063,112.836,444.531,112.837z"/>
				<path d="M183.54,67.081c-3.938,0.001-7.874,0.016-11.812-0.004c-2.32-0.011-3.238-0.909-3.245-3.241
					c-0.02-7.981-0.017-15.963-0.002-23.945c0.004-2.186,0.963-3.214,3.131-3.223c8.09-0.032,16.18-0.029,24.27-0.002
					c1.957,0.006,3.004,1.036,3.013,3.026c0.037,8.144,0.033,16.287,0.005,24.431c-0.006,1.963-1.023,2.928-3.063,2.946
					C191.737,67.105,187.639,67.08,183.54,67.081z"/>
				<path d="M50.115,67.082c-3.991,0-7.982,0.016-11.974-0.005c-2.25-0.012-3.166-0.895-3.172-3.131c-0.021-8.09-0.019-16.18,0-24.271
					c0.004-1.924,0.927-2.981,2.837-2.993c8.251-0.052,16.502-0.045,24.754-0.007c1.747,0.008,2.791,1.073,2.8,2.906
					c0.044,8.251,0.044,16.502-0.002,24.754c-0.01,1.808-1.115,2.72-3.108,2.735C58.205,67.104,54.159,67.081,50.115,67.082z"/>
				<path d="M109.854,52.037c0.001,3.937,0.014,7.874-0.003,11.811c-0.01,2.321-0.894,3.221-3.249,3.227
					c-7.981,0.02-15.964,0.017-23.945,0.001c-2.261-0.005-3.214-0.971-3.22-3.287c-0.02-7.982-0.019-15.964,0-23.945
					c0.004-2.137,1.018-3.17,3.197-3.178c8.036-0.029,16.071-0.025,24.107-0.003c2.092,0.006,3.084,0.993,3.102,3.079
					C109.877,43.839,109.853,47.938,109.854,52.037z"/>
				<path d="M332.43,51.907c0.001,3.991,0.014,7.982-0.005,11.973c-0.011,2.241-0.903,3.185-3.127,3.191
					c-8.09,0.024-16.18,0.021-24.27,0c-1.992-0.005-3.008-0.973-3.017-2.989c-0.038-8.144-0.032-16.287-0.004-24.431
					c0.007-1.885,1.004-2.959,2.898-2.971c8.252-0.048,16.504-0.044,24.756-0.001c1.805,0.01,2.74,1.125,2.756,3.094
					C332.45,43.817,332.429,47.862,332.43,51.907z"/>
				<path d="M228.045,67.082c-3.938,0.001-7.874,0.015-11.811-0.004c-2.261-0.011-3.262-0.957-3.271-3.249
					c-0.033-7.981-0.029-15.962-0.002-23.943c0.007-2.18,1.008-3.209,3.168-3.218c8.089-0.032,16.178-0.028,24.267-0.001
					c1.931,0.006,2.954,0.955,2.965,2.873c0.046,8.25,0.042,16.501,0.005,24.751c-0.01,1.871-1.022,2.763-3.025,2.78
					C236.243,67.104,232.144,67.08,228.045,67.082z"/>
				<path d="M101.055,97.464c0-3.941-0.011-7.883,0.005-11.825c0.009-2.208,0.905-3.207,3.121-3.218
					c8.099-0.042,16.198-0.037,24.298,0.001c1.922,0.009,2.961,0.99,2.974,2.905c0.05,8.261,0.049,16.523-0.002,24.784
					c-0.012,1.799-1.104,2.685-3.146,2.708c-4.049,0.046-8.099,0.018-12.147,0.019c-3.78,0.001-7.561,0.009-11.34-0.003
					c-3.008-0.009-3.754-0.749-3.759-3.707C101.049,105.24,101.055,101.352,101.055,97.464z"/>
				<path d="M146.779,97.349c0-3.883-0.013-7.766,0.005-11.648c0.01-2.269,0.944-3.273,3.24-3.284
					c8.035-0.035,16.071-0.033,24.105,0.001c2.084,0.008,3.065,1.027,3.072,3.123c0.024,8.089,0.021,16.178,0.002,24.267
					c-0.005,1.954-0.896,2.975-2.833,2.986c-8.305,0.049-16.609,0.045-24.913-0.007c-1.809-0.011-2.658-1.099-2.671-3.142
					C146.761,105.546,146.78,101.448,146.779,97.349z"/>
				<path d="M272.55,67.082c-3.883,0.001-7.766,0.011-11.648-0.002c-2.48-0.009-3.356-0.836-3.362-3.268
					c-0.021-7.981-0.019-15.962-0.002-23.943c0.004-2.21,0.93-3.194,3.131-3.202c8.089-0.031,16.179-0.031,24.268,0.001
					c2.102,0.008,3.01,1.115,3.018,3.531c0.017,6.146,0.006,12.295,0.006,18.443c0,1.78,0.029,3.56-0.011,5.338
					c-0.048,2.09-1.009,3.071-3.103,3.089C280.747,67.106,276.647,67.081,272.55,67.082z"/>
				<path d="M406.142,67.082c-3.937,0-7.874,0.014-11.811-0.004c-2.348-0.011-3.257-0.894-3.263-3.211
					c-0.017-8.035-0.015-16.071,0-24.106c0.005-2.062,0.975-3.083,3.083-3.092c8.091-0.034,16.18-0.029,24.27-0.004
					c1.967,0.006,3.037,1.02,3.047,2.996c0.04,8.197,0.039,16.395-0.001,24.592c-0.009,1.892-1.1,2.807-3.19,2.821
					C414.231,67.102,410.187,67.082,406.142,67.082z"/>
				<path d="M289.041,143.402c0.001,3.94,0.014,7.883-0.003,11.824c-0.012,2.42-0.889,3.354-3.312,3.363
					c-7.99,0.03-15.98,0.028-23.972-0.001c-2.106-0.008-3.123-0.981-3.133-3.08c-0.039-8.151-0.036-16.305,0.004-24.458
					c0.01-1.83,0.991-2.813,2.848-2.824c8.261-0.043,16.521-0.041,24.781-0.006c1.87,0.008,2.758,1.017,2.774,3.032
					C289.063,135.303,289.039,139.354,289.041,143.402z"/>
				<path d="M405.979,97.754c-0.001,3.941,0.013,7.884-0.005,11.826c-0.011,2.271-0.854,3.223-3.093,3.234
					c-8.1,0.04-16.199,0.034-24.299,0.001c-2.027-0.009-3.017-0.977-3.024-2.99c-0.036-8.154-0.032-16.308,0-24.461
					c0.008-1.984,1.062-2.918,3.266-2.948c3.348-0.045,6.695-0.014,10.044-0.014c4.534,0,9.07-0.012,13.606,0.004
					c2.594,0.01,3.492,0.919,3.501,3.522C405.99,89.87,405.979,93.812,405.979,97.754z"/>
				<path d="M329.828,97.513c-0.001-3.941-0.012-7.884,0.003-11.825c0.007-2.279,0.924-3.261,3.243-3.271
					c7.99-0.034,15.981-0.029,23.974-0.002c2.187,0.007,3.186,1.004,3.193,3.19c0.027,8.045,0.023,16.091,0.003,24.136
					c-0.007,2.035-0.926,3.05-2.951,3.062c-8.207,0.047-16.415,0.042-24.622,0.002c-1.92-0.009-2.815-1-2.832-2.98
					C329.805,105.72,329.828,101.616,329.828,97.513z"/>
				<path d="M465.945,51.819c0.001,4.044,0.016,8.089-0.005,12.134c-0.011,2.152-0.897,3.107-3.021,3.115
					c-8.144,0.028-16.285,0.025-24.429,0c-1.934-0.006-2.942-1.022-2.951-3.063c-0.038-8.089-0.035-16.178-0.004-24.267
					c0.009-2.143,1.099-3.071,3.469-3.079c5.446-0.017,10.894-0.006,16.34-0.006c2.48,0,4.962-0.021,7.442,0.008
					c2.188,0.025,3.136,0.973,3.15,3.188C465.965,43.838,465.945,47.829,465.945,51.819z"/>
				<path d="M212.874,143.312c0-3.941-0.01-7.884,0.004-11.825c0.009-2.36,0.86-3.271,3.21-3.278c8.045-0.027,16.09-0.025,24.136,0
					c2.112,0.006,3.066,0.96,3.073,3.094c0.027,8.1,0.026,16.198,0,24.297c-0.006,2.02-1.015,2.952-3.213,2.987
					c-3.077,0.049-6.155,0.015-9.233,0.017c-4.751,0-9.503,0.006-14.254-0.004c-2.895-0.005-3.716-0.846-3.721-3.787
					C212.869,150.979,212.874,147.146,212.874,143.312z"/>
				<path d="M361.745,67.082c-3.996,0.001-7.991,0.016-11.987-0.004c-2.229-0.011-3.211-0.889-3.224-3.12
					c-0.046-8.099-0.041-16.198,0.002-24.296c0.011-2.004,1.018-2.981,3.048-2.991c8.151-0.036,16.306-0.036,24.459,0.002
					c2.023,0.009,2.885,1.086,2.893,3.463c0.021,6.965,0.009,13.93,0.009,20.896c0,1.025,0.027,2.053-0.013,3.077
					c-0.079,2.024-0.982,2.942-3.039,2.961C369.844,67.106,365.794,67.081,361.745,67.082z"/>
				<path d="M284.077,97.603c-0.001-3.941-0.013-7.882,0.004-11.823c0.009-2.41,0.895-3.356,3.308-3.366
					c7.937-0.031,15.872-0.026,23.81-0.002c2.285,0.007,3.279,0.963,3.29,3.265c0.036,7.99,0.031,15.98,0.004,23.971
					c-0.009,2.201-0.96,3.162-3.191,3.172c-8.044,0.035-16.089,0.032-24.133,0.001c-2.219-0.008-3.065-0.925-3.082-3.232
					C284.057,105.593,284.077,101.598,284.077,97.603z"/>
				<path d="M334.789,143.521c0.002,3.888,0.018,7.773-0.004,11.66c-0.015,2.521-0.883,3.404-3.432,3.411
					c-7.882,0.023-15.763,0.021-23.645,0c-2.389-0.006-3.329-0.938-3.337-3.366c-0.027-7.937-0.024-15.871-0.002-23.807
					c0.007-2.249,0.916-3.201,3.132-3.209c8.098-0.031,16.193-0.029,24.292-0.001c2.087,0.007,2.96,0.942,2.98,3.166
					C334.816,135.425,334.788,139.475,334.789,143.521z"/>
				<path d="M365.51,128.199c3.887-0.002,7.773-0.014,11.66,0.002c2.431,0.01,3.406,0.893,3.416,3.267c0.033,7.99,0.03,15.979,0,23.97
					c-0.008,2.119-0.954,3.127-3.071,3.139c-8.151,0.047-16.303,0.042-24.454,0.001c-1.932-0.011-2.859-0.986-2.868-2.959
					c-0.032-8.205-0.03-16.411,0-24.616c0.009-1.896,0.957-2.768,3.01-2.789C357.304,128.17,361.407,128.201,365.51,128.199z"/>
				<path d="M167.151,143.223c0-3.94-0.012-7.882,0.004-11.822c0.011-2.277,0.845-3.181,3.111-3.188
					c8.098-0.03,16.197-0.028,24.295,0.002c2.145,0.009,3.006,1.052,3.011,3.504c0.016,6.964,0.006,13.929,0.006,20.894
					c0,0.918,0.017,1.836-0.006,2.753c-0.051,2.196-0.956,3.155-3.167,3.222c-1.995,0.061-3.994,0.018-5.992,0.018
					c-5.886,0-11.77,0.008-17.654-0.004c-2.762-0.005-3.597-0.832-3.605-3.553C167.143,151.105,167.151,147.164,167.151,143.223z"/>
				<path d="M268.694,97.769c0.001,3.887,0.015,7.773-0.004,11.661c-0.011,2.492-0.823,3.383-3.26,3.393
					c-7.989,0.03-15.979,0.027-23.969,0c-2.208-0.008-3.164-0.936-3.175-3.18c-0.042-8.043-0.038-16.088-0.001-24.131
					c0.01-2.1,0.983-3.077,3.126-3.088c8.098-0.043,16.194-0.04,24.293-0.001c2.07,0.01,2.96,1.007,2.979,3.201
					C268.718,89.671,268.692,93.72,268.694,97.769z"/>
				<path d="M222.946,97.754c0,3.888,0.012,7.775-0.003,11.664c-0.009,2.498-0.813,3.394-3.25,3.404
					c-7.991,0.032-15.982,0.029-23.975,0.001c-2.221-0.008-3.189-0.957-3.198-3.161c-0.031-8.045-0.026-16.091-0.003-24.137
					c0.005-2.012,0.943-3.076,2.954-3.09c8.207-0.057,16.415-0.052,24.623-0.004c1.938,0.011,2.827,1.081,2.843,3.173
					C222.966,89.654,222.945,93.704,222.946,97.754z"/>
				<path d="M151.803,143.459c0.001,3.778,0.01,7.557-0.001,11.336c-0.009,2.956-0.825,3.799-3.726,3.805
					c-7.72,0.012-15.438,0.012-23.157,0c-2.661-0.005-3.533-0.841-3.54-3.472c-0.021-7.88-0.021-15.762,0-23.644
					c0.006-2.372,0.866-3.268,3.207-3.275c7.989-0.027,15.978-0.021,23.967-0.004c2.307,0.005,3.208,0.895,3.236,3.271
					C151.836,135.47,151.801,139.465,151.803,143.459z"/>
				<path d="M139.147,67.082c-3.94,0.001-7.883,0.012-11.824-0.003c-2.4-0.009-3.327-0.819-3.34-3.154
					c-0.041-8.045-0.035-16.09-0.003-24.135c0.01-2.183,0.995-3.12,3.233-3.127c7.991-0.024,15.981-0.021,23.973-0.002
					c2.128,0.005,3.168,0.921,3.182,3.021c0.051,8.153,0.045,16.306,0.006,24.459c-0.011,1.999-1.018,2.913-3.077,2.931
					C147.247,67.105,143.198,67.081,139.147,67.082z"/>
			</svg>
		)
	}

	renderToolTip() {
		return ( !this.props.token ? (
			<ReactTooltip place="bottom" type="dark" effect="float">
				<p>Webcam: ctrl + w</p>
				<p>Delete: ctrl + d</p>
				<p>SignUp or Login to save!</p>
			</ReactTooltip> )
			: (
			<ReactTooltip place="bottom" type="dark" effect="float">
				<p>Webcam: ctrl + w</p>
				<p>Delete: ctrl + d</p>
				<p>Save: ctrl + s</p>
			</ReactTooltip> )
		)
	}

	render() {
		return(
			<div className="nav-button">
				{this.renderKeyboard()}
				{this.renderToolTip()}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
    return {
      token: state.Accounts.token
    }
}

export default connect(mapStateToProps)(Keyboard)